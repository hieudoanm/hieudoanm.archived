import { render } from '@testing-library/react';
import Section from '.';

describe('Section', () => {
  test('render default', () => {
    const wrapper = render(<Section>Section</Section>);
    expect(wrapper.container).toMatchSnapshot();
  });
});
