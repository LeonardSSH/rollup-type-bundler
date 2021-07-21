import { cyan, green, red } from 'colorette';
import { readFile } from 'fs/promises';
import { load } from 'js-yaml';
/**
 * Parsed a YAML file into an `Object` of type `T`
 * @param pathLike The {@link PathLike} to read with {@link readFile}
 */
export async function readYaml(pathLike) {
    return load(await readFile(pathLike, { encoding: 'utf-8' }));
}
/**
 * Parses a JSON file into an `Object` of type `T`
 * @param pathLike The {@link PathLike} to read with {@link readFile}
 */
export async function readJson(pathLike) {
    return JSON.parse(await readFile(pathLike, { encoding: 'utf-8' }));
}
export async function doActionAndLog(preActionLog, action) {
    process.stdout.write(cyan(`${preActionLog}... `));
    try {
        const returnValue = (await action);
        console.log(green('✅ Done'));
        return returnValue;
    }
    catch (error) {
        console.log(red('❌ Error'));
        console.error(error.message);
        process.exit(1);
    }
}
