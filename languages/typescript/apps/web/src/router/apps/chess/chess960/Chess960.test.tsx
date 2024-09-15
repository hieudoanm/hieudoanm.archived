import { render } from '@testing-library/react';
import { Chess960 } from './Chess960';

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

describe('Chess960', () => {
  test('render default', () => {
    const wrapper = render(<Chess960 />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
