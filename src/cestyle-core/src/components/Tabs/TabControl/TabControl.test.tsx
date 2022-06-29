import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@cestyle/tests';
import { TabControl, TabControlProps } from './TabControl';

const defaultProps: TabControlProps = {
  active: true,
};

describe('@cestyle/core/TabControl', () => {
  itSupportsSystemProps({
    component: TabControl,
    props: defaultProps,
    displayName: '@cestyle/core/TabControl',
    refType: HTMLButtonElement,
  });

  it('sets correct accessibility attributes based on active prop', () => {
    const active = render(<TabControl {...defaultProps} active />).container.firstChild;
    const inactive = render(<TabControl {...defaultProps} active={false} />).container.firstChild;
    expect(active).toHaveAttribute('tabindex', '0');
    expect(active).toHaveAttribute('role', 'tab');
    expect(active).toHaveAttribute('aria-selected', 'true');
    expect(inactive).toHaveAttribute('tabindex', '-1');
    expect(inactive).toHaveAttribute('aria-selected', 'false');
  });

  it('renders icon', () => {
    const { container: withIcon } = render(<TabControl {...defaultProps} icon="test-icon" />);
    const { container: withoutIcon } = render(
      <TabControl {...defaultProps} icon={null} label="test" />
    );
    expect(withIcon.querySelector('.cestyle-Tabs-tabIcon').textContent).toBe('test-icon');
    expect(withoutIcon.querySelectorAll('.cestyle-Tabs-tabIcon')).toHaveLength(0);
  });

  it('renders label', () => {
    const { container: withLabel } = render(<TabControl {...defaultProps} label="test" />);
    const { container: withoutLabel } = render(<TabControl {...defaultProps} label={null} />);
    expect(withLabel.querySelector('.cestyle-Tabs-tabLabel').textContent).toBe('test');
    expect(withoutLabel.querySelectorAll('.cestyle-Tabs-tabLabel')).toHaveLength(0);
  });
});
