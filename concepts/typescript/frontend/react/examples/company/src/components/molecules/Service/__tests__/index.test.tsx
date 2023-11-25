import { render } from '@testing-library/react';
import { StaticImageData } from 'next/image';
import { Service } from '../index';

describe('Service', () => {
  it('renders correctly', () => {
    const button = render(<Service image={{} as StaticImageData}></Service>);
    expect(button.container).toMatchSnapshot();
  });
});
