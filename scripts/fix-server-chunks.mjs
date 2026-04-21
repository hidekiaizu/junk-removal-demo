import fs from "node:fs";
import path from "node:path";

const serverDir = path.join(process.cwd(), ".next", "server");
const chunksDir = path.join(serverDir, "chunks");

if (!fs.existsSync(serverDir) || !fs.existsSync(chunksDir)) {
  console.log("No built server chunks found to mirror");
  process.exit(0);
}

const chunkFiles = fs
  .readdirSync(chunksDir)
  .filter((file) => file.endsWith(".js"))
  .sort();

for (const file of chunkFiles) {
  fs.copyFileSync(path.join(chunksDir, file), path.join(serverDir, file));
}

console.log(`Mirrored ${chunkFiles.length} server chunk files into .next/server`);
