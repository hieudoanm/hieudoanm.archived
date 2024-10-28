import { render } from '@testing-library/react';
import Position from '.';

describe('Position', () => {
  test('render default', () => {
    const wrapper = render(<Position image="" title="" />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
