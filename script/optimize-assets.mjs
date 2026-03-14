import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, "client", "public");
const sourceExtensions = new Set([".png", ".jpg", ".jpeg"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (sourceExtensions.has(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeFile(filePath) {
  const parsed = path.parse(filePath);
  const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);
  const avifPath = path.join(parsed.dir, `${parsed.name}.avif`);

  const inputBuffer = await fs.readFile(filePath);
  const image = sharp(inputBuffer, { failOn: "none" });

  await image
    .clone()
    .webp({ quality: 78, effort: 6 })
    .toFile(webpPath);

  await image
    .clone()
    .avif({ quality: 50, effort: 6 })
    .toFile(avifPath);

  await fs.unlink(filePath);
}

async function main() {
  const files = await walk(publicDir);

  if (files.length === 0) {
    console.log("No PNG/JPG/JPEG files found under client/public.");
    return;
  }

  console.log(`Found ${files.length} source assets.`);

  for (const filePath of files) {
    await optimizeFile(filePath);
    const relative = path.relative(projectRoot, filePath);
    console.log(`Converted and removed: ${relative}`);
  }

  console.log("Asset optimization complete.");
}

main().catch((error) => {
  console.error("Asset optimization failed:", error);
  process.exitCode = 1;
});
