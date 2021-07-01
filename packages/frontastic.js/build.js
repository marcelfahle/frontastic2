const { build } = require("esbuild");
// const { Generator } = require("npm-dts");
const { dependencies, peerDependencies } = require("./package.json");

const shared = {
  entryPoints: ["src/main.ts"],
  bundle: true,
  external: Object.keys(dependencies).concat(Object.keys(peerDependencies))
};

build({ ...shared, outfile: "dist/main.js", format: "cjs" });

// new Generator({ entry: "src/main.ts", output: "dist/main.d.ts" }).generate();
