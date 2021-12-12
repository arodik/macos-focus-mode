import {fileURLToPath} from "url";
import {dirname, resolve} from "path";

const __filename = fileURLToPath(import.meta.url);
export const rootDirname = dirname(__filename);

export function resolvePath(...paths) {
    return resolve(rootDirname, ...paths);
}
