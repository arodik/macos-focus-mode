import {disableFocusMode, enableFocusMode} from "../src/focus-mode.js";

enableFocusMode();
setTimeout(() => {
    disableFocusMode();
}, 3000);
