import { render } from '@testing-library/react';
import YellowButton from '.';

describe('YellowButton', () => {
  test('render default', () => {
    const wrapper = render(<YellowButton>YellowButton</YellowButton>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
