'use client';

import { DECK_BY_SLUG } from '../deck';
import { Player } from '../player';

export default function Page() {
  return <Player deck={DECK_BY_SLUG['sat-closing']} />;
}
