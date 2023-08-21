#!/usr/bin/env node
import { Command } from "commander";

import { getVersion } from "./utils.js";

const program = new Command();

program
  .name("clump")
  .description("Bundle your ts files with clump.")
  .version(getVersion(), "-v, --version", "Version of currently installed package.")
  .option("--source-map", "Create a source map with the bundle.", false)
  .option("--split-code", "Split the bundle into smaller chunks.", false)
  .option("--minify", "Run the bundle through a minifier", false)
  .parse(process.argv);

const config = program.opts();

console.log(config);
console.log(process.cwd());