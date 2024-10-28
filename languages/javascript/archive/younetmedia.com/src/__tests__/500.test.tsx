import { render } from '@testing-library/react';
import { InternalServerErrorPage } from '../pages/500';

jest.mock('next/router', () => {
  return { useRouter: jest.fn() };
});

describe('InternalServerErrorPage', () => {
  it('renders correctly', () => {
    const { container } = render(<InternalServerErrorPage />);
    expect(container).toMatchSnapshot();
  });
});
