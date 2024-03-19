import { render } from '@testing-library/react';
import { PageProps } from 'gatsby';
import React from 'react';
import IndexPage from '../pages';

describe('IndexPage', () => {
  it('to match snapshot', () => {
    const { container } = render(<IndexPage {...({} as PageProps)} />);
    expect(container).toMatchSnapshot();
  });
});
