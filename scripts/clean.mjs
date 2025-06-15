// @ts-check

import path from "node:path";
import arg from "arg";
import chalk from "chalk";
import { deleteAsync } from "del";

let buildOuputPaths = ["./dist", "./*.js", "./*.d.ts", "./*.mjs", "./*.map", "./*.d.mts"];

let args = arg({
	"--dryrun": Boolean,
	"-d": "--dryrun",
});

if (!process.env.CI) {
	let removedPaths = await deleteAsync(buildOuputPaths, {
		dryRun: args["--dryrun"],
	});

	if (args["--dryrun"]) {
		console.log("Would-be deleted directories:\n");
	} else {
		console.log("Deleted directories:\n");
	}

	for (let removed of removedPaths) {
		console.log("♻️ ", chalk.bold.green(path.relative(process.cwd(), removed)));
	}
}
