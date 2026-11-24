import fs from "node:fs";
import path from "node:path";

const entry = "They want to regulate AI, crypto, and the internet, yet they still email their assistant a Word file and ask for it back as a PDF. Perhaps pass one law first: no lawmaker may write a tech bill until they have converted a single file themselves.";

const outDir = process.env.OUTPUT_DIR || "output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), entry);
process.stdout.write(entry);
