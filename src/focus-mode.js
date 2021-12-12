import {execSync} from "child_process";
import {getInstalledShortcuts, runShortcut} from "./shortcuts.js";
import {resolvePath} from "../root.js";

const FOCUS_MODE_SHORTCUT_NAME = 'macos-focus-mode';
const PATH_TO_FOCUS_MODE_SHORTCUT = resolvePath(`resources/${FOCUS_MODE_SHORTCUT_NAME}.shortcut`);

export function isFocusModeShortcutInstalled() {
    const installedShortcuts = getInstalledShortcuts();
    return installedShortcuts.includes(FOCUS_MODE_SHORTCUT_NAME);
}

export function installFocusModeShortcut() {
    if (isFocusModeShortcutInstalled()) {
        return;
    }

    execSync(`open ${PATH_TO_FOCUS_MODE_SHORTCUT}`);
}

export function startFocusMode() {
    if (!isFocusModeShortcutInstalled()) {
        throw new Error("Shortcut is not installed. Please, reinstall the package or install the shortcut manually");
    }

    runShortcut(`${FOCUS_MODE_SHORTCUT_NAME} <<< 'on'`);
}

export function stopFocusMode() {
    runShortcut(`${FOCUS_MODE_SHORTCUT_NAME} <<< 'off'`);
}

export function isInFocusMode() {
    const output = execSync('defaults read com.apple.controlcenter "NSStatusItem Visible FocusModes"', {encoding: "utf8"});
    const [result, ] = output.split("\n");
    console.log(JSON.stringify(result));
    return result === '1';
}
