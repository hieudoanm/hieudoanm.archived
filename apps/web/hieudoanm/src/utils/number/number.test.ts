import {
  addZero,
  formatCurrency,
  formatNumber,
  isNumeric,
  randomNumber,
} from '.';

describe('addZero', () => {
  it('to match number', () => {
    expect(addZero(9)).toEqual('09');
    expect(addZero(10)).toEqual('10');
  });
});

describe('formatNumber', () => {
  it('should format number', () => {
    expect(formatNumber(1234)).toEqual('1,234');
  });
});

describe('formatCurrency', () => {
  it('should format currency', () => {
    expect(formatCurrency(1234)).toEqual('$1,234.00');
  });
});

describe('isNumeric', () => {
  it('to be number', () => {
    expect(isNumeric('9')).toBeTruthy();
  });
});

describe('randomNumber', () => {
  it('to generate number', () => {
    expect(randomNumber(0, 10)).toBeGreaterThanOrEqual(0);
    expect(randomNumber(0, 10)).toBeLessThanOrEqual(10);
  });
});
