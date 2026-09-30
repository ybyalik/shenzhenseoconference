"""Print each slide deck to a PDF, one 1920x1080 page per slide.

Opens the print view (/side-event-slides/print/<slug>) on the running dev
server with a headless browser, waits for fonts and images, and saves a PDF.
Build slides come out at their final step because the print view renders
them that way.

Usage:  python3 scripts/export-decks.py [out_dir] [slug ...]
"""
import sys, time, pathlib
from playwright.sync_api import sync_playwright

BASE = "http://localhost:5000/side-event-slides/print/"
DECKS = {
    "sat-opening":   "Sat-12-Sep-Opening",
    "sat-closing":   "Sat-12-Sep-Closing",
    "sun-opening":   "Sun-13-Sep-Opening",
    "sun-closing":   "Sun-13-Sep-Closing",
    "nine-steps":    "Sat-12-Sep-Talk-9-Steps-with-AI",
    "seo-happiness": "Sun-13-Sep-Talk-Stress-free-SEO",
}

out_dir = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "pdf-export")
out_dir.mkdir(parents=True, exist_ok=True)
slugs = sys.argv[2:] or list(DECKS)

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={"width": 1920, "height": 1080}, device_scale_factor=1)
    for slug in slugs:
        t0 = time.time()
        page.goto(BASE + slug, wait_until="networkidle", timeout=180_000)
        page.wait_for_selector("[data-print-slide]", timeout=60_000)
        page.wait_for_function("document.fonts.ready.then(() => true)")
        # next/image lazy-loads anything below the fold, and a PDF print never
        # scrolls, so switch every image to eager and walk the page once.
        page.evaluate("document.querySelectorAll('img').forEach(i => { i.loading = 'eager'; })")
        n = page.locator("[data-print-slide]").count()
        for k in range(1, n + 1):
            page.locator(f"[data-print-slide='{k}']").scroll_into_view_if_needed()
            page.wait_for_timeout(120)
        page.evaluate("window.scrollTo(0, 0)")
        page.wait_for_function("Array.from(document.images).every(i => i.complete)", timeout=120_000)
        broken = page.evaluate(
            "Array.from(document.images).filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src')).map(i => i.getAttribute('src'))"
        )
        if broken:
            print(f"  warning: {len(broken)} image(s) failed to load:", broken[:5])
        pdf = out_dir / f"{DECKS[slug]}.pdf"
        page.pdf(
            path=str(pdf),
            width="1920px",
            height="1080px",
            print_background=True,
            prefer_css_page_size=True,
            margin={"top": "0", "right": "0", "bottom": "0", "left": "0"},
        )
        print(f"{slug:<14} {n:>2} slides -> {pdf.name} ({pdf.stat().st_size/1e6:.1f} MB, {time.time()-t0:.0f}s)")
    browser.close()
