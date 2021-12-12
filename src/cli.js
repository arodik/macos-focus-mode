import minimist from 'minimist';
import {
    disableFocusMode,
    enableFocusMode,
    installFocusModeShortcut,
    isFocusModeShortcutInstalled
} from "./focus-mode.js";
import {pluralize} from "./helpers/text.js";

const argv = minimist(process.argv.slice(2));
const [command] = argv._;

const isSilent = argv.silent;

function printHelp() {
    console.log("Usage:");
    console.log(" - macos-focus-mode install");
    console.log(" - macos-focus-mode enable|disable");
    console.log(" - macos-focus-mode enable [-d DURATION_IN_MINUTES]");
    console.log("\nOptions:");
    console.log(" --silent suppress any text output except this message");
}

function printInfo(text) {
    if (isSilent) {
        return;
    }

    console.log(text);
}

function printError(errorText) {
    if (isSilent) {
        return;
    }

    console.error(errorText);
    process.exit(1);
}

function runCli() {
    const isEnableCommand = command === 'enable';
    const isDisableCommand = command === 'disable';
    const isInstallCommand = command === 'install';
    const duration = argv.d;
    const noCommandEntered = !(isEnableCommand || isDisableCommand);
    const isHelp = noCommandEntered || command === 'help' || argv.help;

    if (isInstallCommand) {
        if (isFocusModeShortcutInstalled()) {
            return printInfo("The focus mode shortcut is already installed");
        }

        printInfo("You'll be prompted to install the shortcut. Please, press the 'Add Shortcut' button");
        return installFocusModeShortcut();
    }

    if (isEnableCommand) {
        try {
            enableFocusMode(duration);
        } catch (e) {
            printError(e.message);
        }

        printInfo(duration ? `Focus mode enabled for ${pluralize(1, 'minute')}` : 'Focus mode enabled');
        return;
    }

    if (isDisableCommand) {
        try {
            disableFocusMode();
        } catch (e) {
            printError(e.message);
        }

        printInfo('Focus mode disabled');
        return;
    }

    if (isHelp) {
        return printHelp();
    }
}

runCli();
