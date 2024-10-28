import { render } from '@testing-library/react';
import DownloadIcon from '.';

describe('DownloadIcon', () => {
  test('render default', () => {
    const wrapper = render(<DownloadIcon image="" />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
