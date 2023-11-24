import { render } from '@testing-library/react';
import { PageProps } from 'gatsby';
import React from 'react';
import NotFoundPage from '../pages/404';

describe('NotFoundPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<NotFoundPage {...({} as PageProps)} />);
    expect(container).toMatchSnapshot();
  });
});
