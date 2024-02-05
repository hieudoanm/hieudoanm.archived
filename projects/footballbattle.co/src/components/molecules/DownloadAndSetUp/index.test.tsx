import { render } from '@testing-library/react';
import DownloadAndSetUp from '.';

describe('DownloadAndSetUp', () => {
  test('render default', () => {
    const wrapper = render(<DownloadAndSetUp />);
    expect(wrapper.container).toMatchSnapshot();
  });
});
