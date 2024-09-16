import { render } from '@testing-library/react';
import { GridTemplate, ListTemplate } from '.';

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

describe('GridTemplate', () => {
  test('render default', () => {
    const wrapper = render(<GridTemplate />);
    expect(wrapper.container).toMatchSnapshot();
  });
});

describe('ListTemplate', () => {
  test('render default', () => {
    const wrapper = render(<ListTemplate />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
