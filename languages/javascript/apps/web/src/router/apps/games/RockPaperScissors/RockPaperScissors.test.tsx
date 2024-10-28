import { render } from '@testing-library/react';
import { RockPaperScissors } from './RockPaperScissors';

describe('RockPaperScissors', () => {
  test('render default', () => {
    const wrapper = render(<RockPaperScissors />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
