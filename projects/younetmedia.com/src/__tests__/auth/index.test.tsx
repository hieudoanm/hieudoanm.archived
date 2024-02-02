import { render } from '@testing-library/react';
import { AuthPage } from '../../pages/auth';

jest.mock('next/router', () => {
  return { useRouter: jest.fn() };
});

describe('AuthPage', () => {
  it('renders correctly', () => {
    const { container } = render(<AuthPage />);
    expect(container).toMatchSnapshot();
  });
});
