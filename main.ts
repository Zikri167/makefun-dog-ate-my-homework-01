import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dog's excuse, in the dog's own voice: caught red-pawed, utterly
// unrepentant, and convinced chewing was the only correct response to a
// piece of paper that told it not to be eaten.
const LINE = "The homework said 'do not eat.' I don't read. I chew.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Gate guard, counted per code point so multi-byte characters can never
// slip past the 1-200 limit: exactly one line, no control characters,
// not blank.
const length = [...LINE].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${length}`);
}
if (/[\n\r]/.test(LINE) || LINE.trim().length === 0) {
  throw new Error("entry must be exactly one non-blank line");
}
if (/[\u0000-\u001F\u007F]/.test(LINE)) {
  throw new Error("entry must not contain control characters");
}

writeFileSync(outPath, LINE, "utf8");

// Read the file back and confirm the write round-tripped byte for byte.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt did not round-trip: written content differs");
}
