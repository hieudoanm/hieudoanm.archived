import { render } from '@testing-library/react';
import StakeToPlay from '.';

describe('StakeToPlay', () => {
  test('render default', () => {
    const wrapper = render(<StakeToPlay />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
