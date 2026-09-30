import { SPEAKER_PROFILES } from '@/lib/speaker-profiles';

// Paths are listed without a trailing slash because that is what the site
// actually serves: "/sponsors/" 308-redirects to "/sponsors", and a sitemap
// full of redirects wastes crawl budget.
const PAGES: { path: string; changefreq: string; priority: string }[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/agenda', changefreq: 'weekly', priority: '0.9' },
  { path: '/speakers', changefreq: 'weekly', priority: '0.9' },
  { path: '/sponsors', changefreq: 'monthly', priority: '0.8' },
  { path: '/plan-your-trip', changefreq: 'monthly', priority: '0.8' },
  { path: '/visit-shenzhen', changefreq: 'monthly', priority: '0.7' },
  { path: '/press', changefreq: 'monthly', priority: '0.6' },
  { path: '/contact', changefreq: 'monthly', priority: '0.7' },
  { path: '/terms-conditions', changefreq: 'yearly', priority: '0.3' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
];

export async function GET(request: Request) {
  const url = new URL(request.url);

  // Use production URL if available, otherwise fallback to request URL
  const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shenzhenseoconference.com';
  const baseUrl = process.env.NODE_ENV === 'production' ? productionUrl : `${url.protocol}//${url.host}`;

  const lastmod = new Date().toISOString();

  const entries = [
    ...PAGES,
    // One entry per speaker profile page.
    ...SPEAKER_PROFILES.map((p) => ({
      path: `/speakers/${p.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${baseUrl}${e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
