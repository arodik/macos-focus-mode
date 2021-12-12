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

function runFocusModeShortcut(args) {
    return runShortcut(`${FOCUS_MODE_SHORTCUT_NAME} <<< ${args}`);
}

/**
 * @param {number} durationInMinutes
 * @returns {string}
 */
export function enableFocusMode(durationInMinutes) {
    if (!isFocusModeShortcutInstalled()) {
        throw new Error(`${FOCUS_MODE_SHORTCUT_NAME} shortcut is not installed. Please, reinstall the package or install the shortcut manually`);
    }

    if (durationInMinutes) {
        return runFocusModeShortcut(durationInMinutes);
    }

    return runFocusModeShortcut('on');
}

export function disableFocusMode() {
    return runFocusModeShortcut('off');
}
