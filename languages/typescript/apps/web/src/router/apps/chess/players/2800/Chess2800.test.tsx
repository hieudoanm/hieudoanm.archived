import { render } from '@testing-library/react';
import { Chess2800 } from './Chess2800';

describe('Chess2800', () => {
  test('render default', () => {
    const wrapper = render(<Chess2800 />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
