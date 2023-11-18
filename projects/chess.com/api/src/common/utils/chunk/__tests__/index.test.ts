import { chunk } from '..';

describe('chunk', () => {
  it('should chunk into 4', () => {
    expect(chunk([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
  });
});
