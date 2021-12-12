import minimist from 'minimist';
import {disableFocusMode, enableFocusMode} from "./focus-mode.js";
import {pluralize} from "./helpers/text.js";

const argv = minimist(process.argv.slice(2));
const [command] = argv._;

const isSilent = argv.silent;

function printHelp() {
    console.log("Usage:");
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

function runCli() {
    const isEnable = command === 'enable';
    const duration = argv.d;
    const isDisable = command === 'disable';
    const noCommandEntered = !(isEnable || isDisable);
    const isHelp = noCommandEntered || command === 'help' || argv.help;

    if (isEnable) {
        enableFocusMode(duration);
        printInfo(duration ? `Focus mode enabled for ${pluralize(1, 'minute')}` : 'Focus mode enabled');
        return;
    }

    if (isDisable) {
        disableFocusMode();
        printInfo('Focus mode disabled');
        return;
    }

    if (isHelp) {
        return printHelp();
    }
}

runCli();
