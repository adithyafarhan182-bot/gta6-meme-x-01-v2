// Entry program for gta6-meme-x-01 (Node 22, standard library only).
// It copies POST.json from the repository root to /output/POST.json,
// where the gate reads it. That is all the program has to do.
// The entry is the post itself: the meme is posted on X from a public
// account with make.fun (a link or written out) and/or a tag of
// @makefunai and the entrant's play code in its text, POST.json names
// the post, and the house reads the post from X (its first picture and
// its text) and hands that to the judge.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
