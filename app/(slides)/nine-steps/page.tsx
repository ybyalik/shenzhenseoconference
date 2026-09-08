'use client';

import { NINE_STEPS } from './deck';
import { Player } from '../side-event-slides/player';

export default function Page() {
  return (
    <Player
      deck={{
        slug: 'nine-steps',
        day: 'Saturday 12 September',
        kind: 'Talk',
        title: 'Sat 12 Sep · 9 Steps',
        slides: NINE_STEPS,
      }}
    />
  );
}
