import { render } from '@testing-library/react';
import { NotFoundPage } from '../pages/404';

jest.mock('next/router', () => {
  return { useRouter: jest.fn() };
});

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });
});
