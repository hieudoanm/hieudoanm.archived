import { render } from '@testing-library/react';
import CardHeader from '.';

describe('CardHeader', () => {
  test('render default', () => {
    const wrapper = render(<CardHeader>Card</CardHeader>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
