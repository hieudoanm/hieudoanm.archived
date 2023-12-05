import { render } from '@testing-library/react';
import React from 'react';
import NotFoundPage from '../pages/404';

describe('NotFoundPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toMatchSnapshot();
  });
});
