import { render } from '@testing-library/react';
import CreateAccount from '.';

describe('CreateAccount', () => {
  test('render default', () => {
    const wrapper = render(<CreateAccount />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
