import { render } from '@testing-library/react';
import Card from '.';

describe('Card', () => {
  test('render default', () => {
    const wrapper = render(<Card>Card</Card>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
