import { render } from '@testing-library/react';
import Subheader from '.';

describe('Subheader', () => {
  test('render default', () => {
    const wrapper = render(<Subheader>Subheader</Subheader>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
