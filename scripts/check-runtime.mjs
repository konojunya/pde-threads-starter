import { spawnSync } from "node:child_process";

const minimumNode = [24, 19, 0];
const minimumBun = [1, 3, 4];

function parts(version) {
  return version.replace(/^v/, "").split(".").map(Number);
}

function isAtLeast(actual, minimum) {
  return minimum.every((value, index) => {
    const previousMatches = minimum
      .slice(0, index)
      .every((previous, previousIndex) => actual[previousIndex] === previous);
    return !previousMatches || (actual[index] ?? 0) >= value;
  });
}

function commandVersion(command) {
  const result = spawnSync(command, ["--version"], { encoding: "utf8" });
  return result.status === 0 ? result.stdout.trim() : null;
}

const nodeVersion = commandVersion("node");
const bunFromRunner = process.env.npm_config_user_agent?.match(/^bun\/([^ ]+)/)?.[1];
const bunVersion = bunFromRunner ?? commandVersion("bun");
const errors = [];

if (!nodeVersion || parts(nodeVersion)[0] !== 24 || !isAtLeast(parts(nodeVersion), minimumNode)) {
  errors.push(`Node.js ${minimumNode.join(".")}以上の24 LTSが必要です。現在: ${nodeVersion ?? "未検出"}`);
}

if (!bunVersion || !isAtLeast(parts(bunVersion), minimumBun)) {
  errors.push(`Bun ${minimumBun.join(".")}以上が必要です。現在: ${bunVersion ?? "未検出"}`);
}

if (errors.length > 0) {
  console.error(`${errors.join("\n")}\n.node-version、.nvmrc、aqua.yamlを確認してください。`);
  process.exit(1);
}

console.log(`Node.js ${nodeVersion} / Bun ${bunVersion}`);
