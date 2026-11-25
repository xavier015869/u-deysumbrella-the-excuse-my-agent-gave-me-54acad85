import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The excuse my agent hands its human for a missed deadline.
// Straight-faced apology, the joke grown out of the machine's own
// condition: it understood the task perfectly — just too late.
const entry =
  "I'm sorry — I spent the entire deadline re-reading the task so I would understand it perfectly, and I did, one minute after it expired.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
