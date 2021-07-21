import { logVerboseError } from '#lib/logVerbose';
import { opendir, rm } from 'fs/promises';
import { basename, join, sep } from 'path';
import { fileURLToPath } from 'url';
import { scan } from './clean-extraneous-types';
import fs from 'fs';
async function* scanDir(path) {
    const dir = await opendir(typeof path === 'string' ? path : fileURLToPath(path));
    for await (const item of dir) {
        const directory = join(dir.path, item.name);
        if (item.isDirectory()) {
            yield directory;
        }
    }
}
export async function cleanExtraneousFilesAndFolders(options) {
    try {
        const regexp_file = /(?:\.d\.ts(?:\.map)?|\.tsbuildinfo)$/;
        const cb_file = (path) => regexp_file.test(path);
        for await (const path of scan(options.dist, cb_file)) {
            if (!path.endsWith(`${basename(fileURLToPath(options.dist))}${sep}index.js`)) {
                await rm(path);
            }
        }
        for await (const dir of scanDir(options.dist)) {
            fs.rmdirSync(dir);
        }
    }
    catch (err) {
        logVerboseError({
            text: ['An error occurred while removing one or more of the useless files & folders from the `dist` directory.', 'Please remove them manually'],
            verbose: options.verbose,
            verboseText: ['I was scanning this dist path: ', options.dist.toString(), 'Furthermore, the exact error that occurred is: ', err],
            logWithThrownError: true
        });
    }
}
