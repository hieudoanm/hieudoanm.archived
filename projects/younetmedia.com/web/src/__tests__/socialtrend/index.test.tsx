import { render } from '@testing-library/react';
import { SocialTrendPage } from '../../pages/socialtrend';

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn().mockImplementation(() => {
      return {
        query: {},
        push: jest.fn()
      };
    })
  };
});

describe('SocialTrendPage', () => {
  it('renders correctly', () => {
    const { container } = render(<SocialTrendPage />);
    expect(container).toMatchSnapshot();
  });
});
