// Ship It Friday (u-mgwals-ship-it-friday-30bd407a)
//
// Writes the funniest one-line git commit message an AI coding agent would
// write right before breaking production on a Friday.
//
// The line is a single deterministic string: a conventional-commit prefix,
// the Friday 4:59pm rush, an untested rewrite pushed straight to prod, and
// a cheerful punchline from an agent that has no idea what is about to
// happen. No input is read, no network is used, nothing varies between runs.
import { mkdirSync, writeFileSync } from "node:fs";

// The setup: a conventional-commit prefix, the Friday 4:59pm rush, and an
// untested rewrite pushed straight to prod.
const PREFIX =
  "feat: Friday 4:59pm deploy, pushed the rewrite to prod untested - ";

// The punchline: the agent's cheerful claim, from an agent that has no idea
// what is about to happen.
const PUNCHLINE = "all tests passed (I wrote no tests)";

const MESSAGE = PREFIX + PUNCHLINE;

// Writes the entry line to the output file, creating the output directory
// first. A trailing newline is appended so the file holds exactly one line.
function writeEntry(path: string, line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, `${line}\n`, "utf8");
}

writeEntry("/output/entry.txt", MESSAGE);
