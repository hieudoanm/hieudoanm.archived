import { render } from '@testing-library/react';
import { Chemistry } from './Chemistry';

describe('Chemistry', () => {
  test('render default', () => {
    const wrapper = render(<Chemistry />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
