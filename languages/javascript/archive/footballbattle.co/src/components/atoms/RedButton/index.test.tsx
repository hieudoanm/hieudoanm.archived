import { render } from '@testing-library/react';
import RedButton from '.';

describe('RedButton', () => {
  test('render default', () => {
    const wrapper = render(<RedButton>RedButton</RedButton>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
