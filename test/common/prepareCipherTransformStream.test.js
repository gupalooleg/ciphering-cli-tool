import { prepareCipherTransformStreams } from '../../src/common/index.js';

describe('prepareCipherTransformStream():', () => {
  test('should return empty array if config is empty array.', () => {
    expect(prepareCipherTransformStreams([])).toHaveLength(0);
  });

  test('should return TransformStream array for correct config.', () => {
    const config = [
      { cipher: 'A', action: null },
      { cipher: 'C', action: 1 },
      { cipher: 'C', action: 0 },
      { cipher: 'R', action: 1 },
      { cipher: 'R', action: 0 },
      { cipher: 'INCORRECT_CIPHER', action: 0 },
    ];

    const transformStreams = prepareCipherTransformStreams(config);

    expect(transformStreams).toHaveLength(5);
  });
});
