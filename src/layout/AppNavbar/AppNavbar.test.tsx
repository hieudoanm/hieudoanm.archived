import { render } from '@testing-library/react';
import { AppNavbar } from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: '',
    basePath: '',
    pathname: '',
  }),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: '',
    events: { on: jest.fn(), off: jest.fn() },
  }),
  usePathname: jest.fn().mockReturnValue(''),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
}));

describe('AppNavbar', () => {
  it('to match snapshot', () => {
    const { container } = render(<AppNavbar />);
    expect(container).toMatchSnapshot();
  });
});
