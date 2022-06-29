import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@cestyle/tests';
import { HueSlider, HueSliderProps } from './HueSlider';

const defaultProps: HueSliderProps = {
  value: 150,
  onChange: () => {},
  size: 'sm',
};

describe('@cestyle/core/HueSlider', () => {
  checkAccessibility([<HueSlider {...defaultProps} aria-label="test-label" />]);
  itSupportsSystemProps({
    component: HueSlider,
    props: defaultProps,
    displayName: '@cestyle/core/HueSlider',
    refType: HTMLDivElement,
  });
});
