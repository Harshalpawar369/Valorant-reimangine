import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import UglifyJS from "uglify-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(projectRoot, "public", "scripts");
const outputDir = path.join(projectRoot, "public", "scripts.min");

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".js")) {
      files.push(entryPath);
    }
  }

  return files;
}

async function main() {
  try {
    await fs.access(sourceDir);
  } catch {
    console.log("No public/scripts folder found. Skipping JS minification.");
    return;
  }

  const scripts = await walk(sourceDir);

  if (scripts.length === 0) {
    console.log("No standalone JS files found in public/scripts.");
    return;
  }

  await fs.rm(outputDir, { recursive: true, force: true });

  for (const inputFile of scripts) {
    const relativePath = path.relative(sourceDir, inputFile);
    const outputFile = path.join(outputDir, relativePath);
    const outputFileDir = path.dirname(outputFile);
    const source = await fs.readFile(inputFile, "utf8");
    const result = UglifyJS.minify(source, {
      compress: true,
      mangle: true,
    });

    if (result.error) {
      throw result.error;
    }

    await fs.mkdir(outputFileDir, { recursive: true });
    await fs.writeFile(outputFile, result.code ?? "", "utf8");
  }

  console.log(`Minified ${scripts.length} JS file(s) into ${path.relative(projectRoot, outputDir)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});