import {execSync} from "child_process";

export function getInstalledShortcuts() {
    const result = execSync("shortcuts list", {encoding: 'utf8'});

    return result.split("\n").filter(Boolean);
}

/**
 * @param {string} shortcutName
 * @returns {string}
 */
export function runShortcut(shortcutName) {
    return execSync(`shortcuts run ${shortcutName}`, {encoding: 'utf8'});
}
