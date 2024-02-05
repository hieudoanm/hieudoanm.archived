import { render } from '@testing-library/react';
import Sprite from '.';

describe('Sprite', () => {
  test('render default', () => {
    const wrapper = render(<Sprite image="">Sprite</Sprite>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
