import React from 'react';
import { itSupportsSystemProps } from '@cestyle/tests';
import { Popover, PopoverProps } from './Popover';

const defaultProps: PopoverProps = {
  opened: true,
  onClose: () => {},
  withinPortal: false,
  target: <div>target</div>,
  children: 'test-content',
  title: 'test-title',
  transitionDuration: 0,
};

describe('@cestyle/core/Popover', () => {
  itSupportsSystemProps({
    component: Popover,
    props: defaultProps,
    displayName: '@cestyle/core/Popover',
  });
});
