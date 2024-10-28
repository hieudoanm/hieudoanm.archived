import { render } from '@testing-library/react';
import { ChessSwiss } from './ChessSwiss';

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

describe('ChessSwiss', () => {
  test('render default', () => {
    const wrapper = render(<ChessSwiss />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
