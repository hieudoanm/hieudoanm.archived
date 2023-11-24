import { render } from '@testing-library/react';
import { InsightsTemplate } from '..';
import { Insights } from '@chess/types/chess';
import { mockResizeObserver } from '@chess/common/utils/mock-resize-observer';

jest.mock('next/router', () => ({
  useRouter: jest
    .fn()
    .mockReturnValue({ asPath: '', events: { on: jest.fn(), off: jest.fn() } }),
}));

describe('InsightsTemplate', () => {
  beforeEach(() => {
    mockResizeObserver();
  });

  it('to match snapshot', () => {
    const { container } = render(
      <InsightsTemplate insights={{} as Insights} />
    );
    expect(container).toMatchSnapshot();
  });
});
