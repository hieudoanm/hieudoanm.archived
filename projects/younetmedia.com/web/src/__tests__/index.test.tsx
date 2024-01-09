import { render } from '@testing-library/react';
import { HomePage } from '../pages/index';

jest.mock('next/router', () => {
  return { useRouter: jest.fn() };
});

describe('HomePage', () => {
  it('renders correctly', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
