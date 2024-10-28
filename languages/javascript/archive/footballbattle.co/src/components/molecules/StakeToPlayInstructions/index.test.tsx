import { render } from '@testing-library/react';
import StakeToPlayInstructions from '.';

describe('StakeToPlayInstructions', () => {
  test('render default', () => {
    const wrapper = render(<StakeToPlayInstructions />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
