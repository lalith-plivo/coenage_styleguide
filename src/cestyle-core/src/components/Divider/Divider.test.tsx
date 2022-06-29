import React from 'react';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps } from '@cestyle/tests';
import { Divider, DividerProps } from './Divider';

const defaultProps: DividerProps = {};

describe('@cestyle/core/Divider', () => {
  itSupportsSystemProps({
    component: Divider,
    props: defaultProps,
    displayName: '@cestyle/core/Divider',
    refType: HTMLDivElement,
  });

  it('renders given label in horizontal orientation', () => {
    render(<Divider label="test-label" />);
    expect(screen.getByText('test-label')).toBeInTheDocument();
  });

  it('does not render label if label prop is not set or orientation is set to vertical', () => {
    const { container } = render(<Divider label="test-label" orientation="vertical" />);
    expect(container.querySelectorAll('.cestyle-Divider-label')).toHaveLength(0);
  });
});
