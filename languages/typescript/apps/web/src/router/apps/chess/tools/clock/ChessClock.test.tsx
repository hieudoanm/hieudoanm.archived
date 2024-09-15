import { render } from '@testing-library/react';
import { ChessClock } from './CheckClock';

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

describe('ChessClock', () => {
  test('render default', () => {
    const wrapper = render(<ChessClock />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
