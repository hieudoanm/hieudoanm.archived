import { render } from '@testing-library/react';
import React from 'react';
import Input from '../Input';

describe('Input', () => {
  it('to match snapshot', () => {
    const button = render(<Input value="" />);
    expect(button.container).toMatchSnapshot();
  });
});
