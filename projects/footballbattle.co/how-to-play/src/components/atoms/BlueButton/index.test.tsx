import { render } from '@testing-library/react';
import BlueButton from '.';

describe('BlueButton', () => {
  test('render default', () => {
    const wrapper = render(<BlueButton>Button</BlueButton>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
