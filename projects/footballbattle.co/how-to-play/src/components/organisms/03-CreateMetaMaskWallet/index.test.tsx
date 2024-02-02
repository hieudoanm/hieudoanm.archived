import { render } from '@testing-library/react';
import CreateMetaMaskWallet from '.';

describe('CreateMetaMaskWallet', () => {
  test('render default', () => {
    const wrapper = render(<CreateMetaMaskWallet />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
