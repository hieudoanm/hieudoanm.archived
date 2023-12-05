import {
  APP_NAME,
  ERROR_MESSAGE_AUTHENTICATION,
  ERROR_MESSAGE_DATE_RANGE
} from '..';

describe('constants', () => {
  it('APP_NAME', () => {
    expect(APP_NAME).toEqual('YouNetMedia');
  });

  it('ERROR_MESSAGE_DATE_RANGE', () => {
    expect(ERROR_MESSAGE_DATE_RANGE).toEqual('Missing Date Range');
  });

  it('ERROR_MESSAGE_AUTHENTICATION', () => {
    expect(ERROR_MESSAGE_AUTHENTICATION).toEqual('Please Log In Again');
  });
});
