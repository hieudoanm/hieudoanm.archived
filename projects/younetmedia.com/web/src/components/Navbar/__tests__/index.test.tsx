import { render } from '@testing-library/react';
import { Navbar } from '../index';

jest.mock('next/router', () => {
  return { useRouter: jest.fn() };
});

describe('Navbar', () => {
  it('renders correctly', () => {
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
