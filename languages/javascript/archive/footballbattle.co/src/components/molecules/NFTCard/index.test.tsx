import { render } from '@testing-library/react';
import NFTCard from '.';

describe('NFTCard', () => {
  test('render default', () => {
    const wrapper = render(
      <NFTCard title="" description="" action="" href="" image="" />
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
