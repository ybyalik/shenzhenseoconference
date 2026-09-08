'use client';

import { SEO_HAPPINESS } from './deck';
import { Player } from '../side-event-slides/player';

export default function Page() {
  return (
    <Player
      deck={{
        slug: 'seo-happiness',
        day: 'Sunday 13 September',
        kind: 'Talk',
        title: 'Sun 13 Sep · Stress-free SEO',
        slides: SEO_HAPPINESS,
      }}
    />
  );
}
