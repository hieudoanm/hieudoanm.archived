import { render } from '@testing-library/react';
import { ChessSwiss } from './ChessSwiss';

describe('ChessSwiss', () => {
  test('render default', () => {
    const wrapper = render(<ChessSwiss />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
