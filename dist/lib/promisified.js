import { exec } from 'child_process';
import { lstat } from 'fs/promises';
import { promisify } from 'util';
export const execAsync = promisify(exec);
export const fileExistsAsync = (path) => lstat(path)
    .then(() => true)
    .catch(() => false);
