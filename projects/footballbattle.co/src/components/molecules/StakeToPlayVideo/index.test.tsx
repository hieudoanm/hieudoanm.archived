import { render } from '@testing-library/react';
import StakeToPlayVideo from '.';

describe('StakeToPlayVideo', () => {
  test('render default', () => {
    const wrapper = render(<StakeToPlayVideo />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
