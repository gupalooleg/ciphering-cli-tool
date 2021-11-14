import { CCTError } from './error/index.js';
import { CLIHandler } from './cli/index.js';
import { FileReadStream, FileWriteStream } from './stream/index.js';
import { MESSAGES, prepareCipherTransformStreams } from './common/index.js';
import { pipeline } from 'stream';

let readStream, writeStream;
let cipherTransformStreams = [];
try {
  const launchParameters = new CLIHandler().getLaunchParameters();

  readStream = launchParameters.input ? new FileReadStream(launchParameters.input) : process.stdin;

  writeStream = launchParameters.output
    ? new FileWriteStream(launchParameters.output)
    : process.stdout;

  cipherTransformStreams = prepareCipherTransformStreams(launchParameters.config);
} catch (e) {
  if (e instanceof CCTError) {
    process.stderr.write(e.message);
    process.exit(1);
  } else {
    throw e;
  }
}

if (process.stdin === readStream) {
  process.stdout.write(MESSAGES.ENTER_TEXT);
}

pipeline(readStream, ...cipherTransformStreams, writeStream, (e) => {
  if (e) {
    if (e instanceof CCTError) {
      process.stderr.write(e.message);
      process.exit(1);
    } else {
      throw e;
    }
  }
});
