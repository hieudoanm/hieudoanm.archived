import { render } from '@testing-library/react';
import BuildTheTeam from '.';

describe('BuildTheTeam', () => {
  test('render default', () => {
    const wrapper = render(<BuildTheTeam />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
