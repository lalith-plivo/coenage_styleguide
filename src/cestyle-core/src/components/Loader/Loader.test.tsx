import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@cestyle/tests';
import { Loader, LoaderProps } from './Loader';

const defaultProps: LoaderProps = {};

describe('@cestyle/core/Loader', () => {
  itSupportsSystemProps({
    component: Loader,
    props: defaultProps,
    displayName: '@cestyle/core/Loader',
  });

  it('sets svg width based on size prop', () => {
    const { container } = render(<Loader size={41} variant="bars" />);
    expect(container.querySelector('svg')).toHaveAttribute('width', '41px');
  });
});
