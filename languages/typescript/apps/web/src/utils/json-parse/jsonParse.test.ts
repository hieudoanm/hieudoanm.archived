import { jsonParse } from '.';

describe('jsonParse', () => {
  it('should parse successfully', () => {
    expect(jsonParse('[]')).toEqual([]);
  });

  it('should return error', () => {
    expect(jsonParse('')).toEqual([]);
  });
});
