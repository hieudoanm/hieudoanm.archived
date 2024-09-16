import { render } from '@testing-library/react';
import { ChessOpenings } from '.';

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

describe('ChessOpenings', () => {
  test('render default', () => {
    const wrapper = render(<ChessOpenings />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
