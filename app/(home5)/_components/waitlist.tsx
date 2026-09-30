'use client';

import { useEffect, useState } from 'react';

import { NewsletterModal } from './newsletter-modal';

/**
 * "Get notified about 2027 tickets": the same AWeber sign-up as the newsletter
 * popup, with its own wording and a `2027-waitlist` tag so these contacts can
 * be picked out in AWeber later.
 *
 * The Nav renders one WaitlistModal per page. Any button anywhere on the page
 * opens it by calling openWaitlist(), which fires a window event, so the hero,
 * the tickets block, the footer and the presale page all share one modal
 * without threading state through the tree.
 */
const OPEN_EVENT = 'szseo:open-waitlist';

export function openWaitlist() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function WaitlistModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, []);

  return (
    <NewsletterModal
      open={open}
      onClose={() => setOpen(false)}
      heading="Get notified about 2027 tickets"
      subheading="Super Early Bird is closed, with 114 tickets sold. Leave your email and you will be the first to hear when the next round opens."
      thanksHeading="You're on the list"
      thanks="We will email you the moment the next round of 2027 tickets opens."
      tag="2027-waitlist"
      field="name"
    />
  );
}
