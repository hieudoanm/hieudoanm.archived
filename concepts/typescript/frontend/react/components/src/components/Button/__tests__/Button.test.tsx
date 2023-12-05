import { render } from '@testing-library/react';
import React from 'react';
import Button from '../Button';

describe('Button', () => {
  it('to match snapshot', () => {
    const button = render(<Button />);
    expect(button.container).toMatchSnapshot();
  });
});
