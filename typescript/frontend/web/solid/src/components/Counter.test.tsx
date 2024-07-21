import { render } from '@solidjs/testing-library';
import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Counter', () => {
  it('should assert some dummy assertion', () => {
    const { container } = render(() => <Counter />);
    expect(container).toMatchSnapshot();
  });
});
