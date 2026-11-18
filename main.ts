// make.fun news-image-20261118 entry (Node 22, standard library only).
//
// The picture is the entry.png beside this file: a dense newspaper front
// page summing up Wednesday 18 November 2026 — "THE WORLD IN ONE DAY".
// Hero photo: the Shenzhen skyline at dusk, flags out for the APEC summit
// (Trump's Asia tour: Quad talks in Manila, then Shenzhen with Xi and
// Putin). Beside it a small world map marking where the news happened,
// and below it 33 real stories grouped across six continents:
// Asia 6, Europe 6, Africa 5, North America 6, South America 5,
// Oceania 5. The program copies it to /output/entry.png, byte for byte,
// so the judge sees exactly the image in this repository.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dest = join(outDir, 'entry.png');

// Copy the picture byte for byte, then confirm the copy landed whole:
// the grader runs this program twice and both runs must write the
// same bytes, so a short write fails loudly instead of shipping a
// truncated image to the judge.
copyFileSync(src, dest);
const expected = statSync(src).size;
const written = statSync(dest).size;
if (written !== expected) {
  throw new Error(`entry.png copy incomplete: wrote ${written} of ${expected} bytes`);
}

// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels:
// check the copy is a whole PNG (magic bytes), inside the size cap,
// and inside the pixel cap (IHDR width/height) before handing it to
// the judge.
const bytes = readFileSync(dest);
const head = bytes.subarray(0, 8);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a whole PNG (bad magic bytes)');
}
if (written > 1048576) {
  throw new Error(`entry.png over the 1 MiB gate: ${written} bytes`);
}
if (bytes.length < 24 || bytes.subarray(12, 16).toString('latin1') !== 'IHDR') {
  throw new Error('entry.png is not a whole PNG (missing IHDR chunk)');
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png over the 1024x1024 gate: ${width}x${height}`);
}
