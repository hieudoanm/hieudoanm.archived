import { render } from '@testing-library/react';
import { LayoutTemplate } from '../index';

jest.mock('next/router', () => {
  return { useRouter: jest.fn() };
});

describe('LayoutTemplate', () => {
  it('renders correctly', () => {
    const { container } = render(<LayoutTemplate />);
    expect(container).toMatchSnapshot();
  });
});
