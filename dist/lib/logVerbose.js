import { cyan, red } from 'colorette';
/**
 * Logs an error and appends extra information if verbose is on
 * @param param See {@link LogVerboseErrorOptions}
 */
export function logVerboseError({ text, verbose = false, verboseText = [], exitAfterLog = false, logWithThrownError = false }) {
    if (verbose) {
        text = text.concat(verboseText);
    }
    const message = red(text.join('\n'));
    if (logWithThrownError) {
        throw new Error(message);
    }
    else {
        console.error('\n', message);
    }
    if (exitAfterLog && !logWithThrownError) {
        process.exit(1);
    }
}
export function logVerboseInfo(text, verbose = false) {
    if (verbose) {
        console.log(cyan(text.join('\n')));
    }
}
