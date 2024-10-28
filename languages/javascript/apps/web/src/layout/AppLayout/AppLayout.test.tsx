import { render } from '@testing-library/react';
import { AppLayout } from '.';

describe('AppLayout', () => {
  it('to match snapshot', () => {
    const { container } = render(<AppLayout />);
    expect(container).toMatchSnapshot();
  });
});
