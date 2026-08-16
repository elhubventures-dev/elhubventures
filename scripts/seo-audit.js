import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const APP = join(process.cwd(), "app");
const errors = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (entry.name !== "page.tsx") continue;
    if (full === join(APP, "page.tsx")) continue;
    const src = readFileSync(full, "utf8");
    if (!src.includes("pageMetadata") && !src.includes("generateMetadata")) {
      errors.push(`Missing pageMetadata/generateMetadata: ${full}`);
    }
  }
}

walk(APP);

const home = join(APP, "page.tsx");
if (existsSync(home) && !readFileSync(home, "utf8").includes("<h1")) {
  errors.push("Homepage missing H1");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("SEO audit: metadata checks passed.");
