import { cyan, green, red } from 'colorette';
import type { PathLike } from 'fs';
import { readFile } from 'fs/promises';
import { load } from 'js-yaml';

/**
 * Parsed a YAML file into an `Object` of type `T`
 * @param pathLike The {@link PathLike} to read with {@link readFile}
 */
export async function readYaml<T>(pathLike: PathLike): Promise<T> {
  return load(await readFile(pathLike, { encoding: 'utf-8' })) as unknown as T;
}

/**
 * Parses a JSON file into an `Object` of type `T`
 * @param pathLike The {@link PathLike} to read with {@link readFile}
 */
export async function readJson<T>(pathLike: PathLike): Promise<T> {
  return JSON.parse(await readFile(pathLike, { encoding: 'utf-8' })) as T;
}

export async function doActionAndLog<T>(preActionLog: string, action: Promise<T>): Promise<T> {
  process.stdout.write(cyan(`${preActionLog}... `));
  try {
    const returnValue = (await action) as T;
    console.log(green('✅ Done'));
    return returnValue;
  } catch (error) {
    console.log(red('❌ Error'));
    console.error((error as Error).message);
    process.exit(1);
  }
}
