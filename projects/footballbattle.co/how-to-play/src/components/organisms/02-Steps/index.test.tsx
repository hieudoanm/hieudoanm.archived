import { render } from '@testing-library/react';
import Steps from '.';

describe('Steps', () => {
  test('render default', () => {
    const wrapper = render(<Steps />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
