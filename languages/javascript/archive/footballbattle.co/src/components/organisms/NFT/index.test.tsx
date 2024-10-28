import { render } from '@testing-library/react';
import NFT from '.';

describe('NFT', () => {
  test('render default', () => {
    const wrapper = render(<NFT />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
