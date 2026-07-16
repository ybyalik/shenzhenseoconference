'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Newsletter signup popup (AWeber). Opened from the nav envelope icon.
 * The form posts natively to AWeber but targets a hidden iframe, so the visitor
 * stays on the site and sees an inline "subscribed" message instead of being
 * redirected to AWeber's thank-you page.
 */
export function NewsletterModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const submittedRef = useRef(false);
  const referrerRef = useRef<HTMLInputElement>(null);

  // Lock body scroll, close on Escape, and set the AWeber referrer tag while open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    if (referrerRef.current) {
      referrerRef.current.value = 'referrer_' + (document.referrer || 'direct');
    }
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  // Always start on the form view each time the popup is reopened.
  useEffect(() => {
    if (open) {
      setSubmitted(false);
      submittedRef.current = false;
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Subscribe to our newsletter"
      onClick={onClose}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(3, 6, 13, 0.8)', backdropFilter: 'blur(4px)' }} />

      <div className="relative w-full max-w-[520px] my-8" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 grid place-items-center w-9 h-9 rounded-full text-white transition-colors hover:bg-black/70"
          style={{ background: 'rgba(0, 0, 0, 0.55)', border: '1px solid rgba(255, 255, 255, 0.3)' }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
            <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="aw-container">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '8px 0' }}>
              <h2 className="aw-heading">You&apos;re subscribed!</h2>
              <p className="aw-subheading" style={{ marginBottom: 0 }}>
                Thanks for signing up. Watch your inbox for event updates, speakers, and exclusive news.
              </p>
            </div>
          ) : (
            <form
              method="post"
              action="https://aw163098.optin.com/scripts/addlead.pl"
              target="aw-optin-iframe"
              onSubmit={() => {
                submittedRef.current = true;
              }}
            >
              <h2 className="aw-heading">Get Event Updates &amp; Our Newsletter</h2>
              <p className="aw-subheading">
                Be the first to know about upcoming events, speakers, and exclusive news.
              </p>

              <div className="aw-field">
                <label htmlFor="aw-email" className="aw-label">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  id="aw-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="aw-input"
                />
              </div>

              <div className="aw-field">
                <label htmlFor="aw-job" className="aw-label">
                  What describes you best? <span aria-hidden="true">*</span>
                </label>
                <select id="aw-job" name="custom Job Title" required className="aw-select" defaultValue="">
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="SEO Specialist">SEO Specialist</option>
                  <option value="SEO Manager">SEO Manager / Head of SEO</option>
                  <option value="Business Owner">Founder / Business Owner</option>
                  <option value="Digital Marketing Manager">Digital Marketing Manager</option>
                  <option value="In-house Marketer">In-house Marketer</option>
                  <option value="Ecommerce Professional">Ecommerce Professional</option>
                  <option value="Student">Student</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="aw-consent-field">
                <input
                  id="aw-consent"
                  type="checkbox"
                  name="custom Consent"
                  value="Agreed"
                  required
                  className="aw-consent-checkbox"
                />
                <label htmlFor="aw-consent" className="aw-consent-label">
                  I agree to the{' '}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="aw-consent-link">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-conditions" target="_blank" rel="noopener noreferrer" className="aw-consent-link">
                    Terms &amp; Conditions
                  </a>
                  . <span aria-hidden="true">*</span>
                </label>
              </div>

              <button type="submit" className="aw-button">
                Sign Me Up
              </button>
              <p className="aw-required-note">* Required fields</p>

              <input type="hidden" name="listname" defaultValue="awlist6963309" />
              <input type="hidden" name="meta_web_form_id" defaultValue="156435832" />
              <input type="hidden" name="redirect" defaultValue="https://aw163098.optin.com/thankyou.htm" />
              <input ref={referrerRef} type="hidden" name="meta_tags" defaultValue="" />
              <input type="hidden" name="meta_adtracking" defaultValue="" />
              {/* AWeber form-view tracking pixel */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://aw163098.optin.com/forms/displays.htm?id=jKxsLMysHMxM" alt="" style={{ display: 'none' }} />
            </form>
          )}
        </div>
      </div>

      {/* Hidden target so the POST doesn't navigate the page away. */}
      <iframe
        name="aw-optin-iframe"
        title="newsletter-submit"
        style={{ display: 'none' }}
        onLoad={() => {
          if (submittedRef.current) setSubmitted(true);
        }}
      />

      <style>{`
        .aw-container {
          padding: 44px 40px;
          border-radius: 20px;
          background: linear-gradient(135deg, #118bac 0%, #fd4c4c 100%);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
        }
        .aw-heading { color: #fff; font-size: 30px; font-weight: 700; line-height: 1.2; margin: 0 0 12px 0; text-align: center; }
        .aw-subheading { color: rgba(255, 255, 255, 0.92); font-size: 16px; line-height: 1.5; margin: 0 0 30px 0; text-align: center; }
        .aw-field { margin-bottom: 20px; }
        .aw-label { display: block; color: #fff; font-size: 15px; font-weight: 600; margin-bottom: 8px; }
        .aw-input, .aw-select {
          width: 100%; box-sizing: border-box; padding: 14px 16px; font-size: 16px; color: #1f2937;
          background: #fff; border: 2px solid rgba(255, 255, 255, 0.6); border-radius: 10px; outline: none;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .aw-select { appearance: none; -webkit-appearance: none; cursor: pointer; }
        .aw-input:focus, .aw-select:focus { border-color: #fff; box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.35); }
        .aw-button {
          width: 100%; padding: 16px 24px; font-size: 17px; font-weight: 700; color: #118bac;
          background: #fff; border: none; border-radius: 10px; cursor: pointer;
          transition: transform 200ms ease, box-shadow 200ms ease; margin-top: 8px;
        }
        .aw-button:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25); }
        .aw-required-note { color: rgba(255, 255, 255, 0.85); font-size: 13px; text-align: center; margin: 16px 0 0 0; }
        .aw-consent-field { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 20px; }
        .aw-consent-checkbox { margin-top: 3px; width: 16px; height: 16px; flex-shrink: 0; cursor: pointer; }
        .aw-consent-label { color: rgba(255, 255, 255, 0.95); font-size: 14px; line-height: 1.5; cursor: pointer; }
        .aw-consent-link { color: #fff; font-weight: 700; text-decoration: underline; }
        .aw-consent-link:hover { color: rgba(255, 255, 255, 0.85); }
        @media (prefers-reduced-motion: reduce) {
          .aw-button:hover { transform: none; }
          .aw-input, .aw-select, .aw-button { transition: none; }
        }
        @media (max-width: 600px) {
          .aw-container { padding: 32px 20px; border-radius: 14px; }
          .aw-heading { font-size: 25px; }
        }
      `}</style>
    </div>
  );
}
