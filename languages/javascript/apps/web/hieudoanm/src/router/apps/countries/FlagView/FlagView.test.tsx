import { render } from '@testing-library/react';
import { FlagView } from '.';

describe('FlagView', () => {
  test('render default', () => {
    const wrapper = render(<FlagView countries={[]} />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
