import { rm } from 'fs/promises';
import type { Options } from '#lib/interfaces';
import { logVerboseError } from '#lib/logVerbose';

/**
 * Removes the `dist` directory ahead of rebuilding code to ensure a clean build
 * @param options The options that tell this function where to clean up
 */
export async function cleanDist(options: Options): Promise<void> {
  try {
    await rm(options.dist, { recursive: true, force: true });
  } catch (error) {
    logVerboseError({
      text: ['Failed to clean the configured "dist" directory. Is the path accessible?'],
      verbose: options.verbose,
      verboseText: ['The error message that was thrown is: ', error],
      logWithThrownError: true
    });
  }
}
