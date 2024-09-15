import { render } from '@testing-library/react';
import { AppNavbar } from '.';

describe('AppNavbar', () => {
  it('to match snapshot', () => {
    const { container } = render(<AppNavbar />);
    expect(container).toMatchSnapshot();
  });
});
