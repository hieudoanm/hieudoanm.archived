import { render } from '@testing-library/react';
import Step from '.';

describe('Step', () => {
  test('render default', () => {
    const wrapper = render(<Step image="" title="" />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
