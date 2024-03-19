import { render } from '@testing-library/react';
import { StaticImageData } from 'next/image';
import { Project } from '../index';

describe('Project', () => {
  it('renders correctly', () => {
    const button = render(<Project image={{} as StaticImageData}></Project>);
    expect(button.container).toMatchSnapshot();
  });
});
