import path from "path";
import { fileURLToPath } from "url";
import fs from "fs-extra";
import type { PackageJson } from "type-fest";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageJSON: PackageJson = fs.readJsonSync(
  path.join(__dirname, "../package.json")
);

export const getVersion = () => {
  return packageJSON.version ?? "0.0.0";
};
