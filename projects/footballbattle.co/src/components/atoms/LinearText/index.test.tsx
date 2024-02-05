import { render } from '@testing-library/react';
import LinearText from '.';

describe('LinearText', () => {
  test('render default', () => {
    const wrapper = render(<LinearText>LinearText</LinearText>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
