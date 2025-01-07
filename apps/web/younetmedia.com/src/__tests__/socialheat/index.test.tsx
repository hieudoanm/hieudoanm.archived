import { render } from '@testing-library/react';
import { SocialHeatPage } from '../../pages/socialheat';

jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

jest.mock('next/router', () => {
  return {
    useRouter: jest.fn().mockImplementation(() => {
      return {
        query: {},
        push: jest.fn(),
      };
    }),
  };
});

describe('SocialHeatPage', () => {
  it('renders correctly', () => {
    const { container } = render(<SocialHeatPage />);
    expect(container).toMatchSnapshot();
  });
});
