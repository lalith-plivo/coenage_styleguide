import React from 'react';
import { itSupportsSystemProps } from '@cestyle/tests';
import { SliderRoot, SliderRootProps } from './SliderRoot';

const defaultProps: SliderRootProps = {
  size: 10,
  children: <div />,
  disabled: false,
};

describe('@cestyle/core/SliderRoot', () => {
  itSupportsSystemProps({
    component: SliderRoot,
    props: defaultProps,
    displayName: '@cestyle/core/SliderRoot',
    refType: HTMLDivElement,
  });
});
