import { render } from '@testing-library/react';
import { ErrorTemplate } from '../index';

describe('ErrorTemplate', () => {
  it('renders correctly', () => {
    const { container } = render(<ErrorTemplate code={500} message="Error" />);
    expect(container).toMatchSnapshot();
  });
});
