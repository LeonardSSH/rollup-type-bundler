import type { Options } from '#lib/interfaces';
import { logVerboseError } from '#lib/logVerbose';
import { opendir, rm } from 'fs/promises';
import { basename, join, sep } from 'path';
import { fileURLToPath, URL } from 'url';

export async function* scan(path: URL | string, cb: (path: string) => boolean): AsyncGenerator<string> {
  const dir = await opendir(typeof path === 'string' ? path : fileURLToPath(path));

  for await (const item of dir) {
    const file = join(dir.path, item.name);
    if (item.isFile()) {
      if (cb(file)) yield file;
    } else if (item.isDirectory()) {
      yield* scan(file, cb);
    }
  }
}

async function* scanDir(path: URL | string): AsyncGenerator<string> {
  const dir = await opendir(typeof path === 'string' ? path : fileURLToPath(path));

  for await (const item of dir) {
    const directory = join(dir.path, item.name);
    if (item.isDirectory()) {
      yield directory;
    }
  }
}

export async function cleanExtraneousFilesAndFolders(options: Options): Promise<void> {
  try {
    const regexp_file = /(?:.js)$/;
    const cb_file = (path: string) => regexp_file.test(path);

    for await (const path of scan(options.dist, cb_file)) {
      if (!path.endsWith(`${basename(fileURLToPath(options.dist))}${sep}index.js`)) {
        await rm(path);
      }
    }

    for await (const dir of scanDir(options.dist)) {
      await rm(dir, { recursive: true });
    }
  } catch (err) {
    logVerboseError({
      text: ['An error occurred while removing one or more of the useless files & folders from the `dist` directory.', 'Please remove them manually'],
      verbose: options.verbose,
      verboseText: ['I was scanning this dist path: ', options.dist.toString(), 'Furthermore, the exact error that occurred is: ', err],
      logWithThrownError: true
    });
  }
}
