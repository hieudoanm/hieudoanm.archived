import { render } from '@testing-library/react';
import { AppFooter } from '.';

describe('AppFooter', () => {
  it('to match snapshot', () => {
    const { container } = render(<AppFooter />);
    expect(container).toMatchSnapshot();
  });
});
