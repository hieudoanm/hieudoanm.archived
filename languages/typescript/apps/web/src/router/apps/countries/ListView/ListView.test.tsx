import { render } from '@testing-library/react';
import { RefObject } from 'react';
import { ListView } from '.';

describe('ListView', () => {
  test('render default', () => {
    const wrapper = render(
      <ListView countries={[]} parentRef={{} as RefObject<HTMLDivElement>} />
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
