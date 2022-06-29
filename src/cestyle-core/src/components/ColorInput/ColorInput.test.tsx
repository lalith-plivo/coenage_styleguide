import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsWrapperProps,
  itSupportsInputProps,
} from '@cestyle/tests';
import { ColorInput, ColorInputProps } from './ColorInput';

const defaultProps: ColorInputProps = {
  label: 'test-label',
};

describe('@cestyle/core/ColorInput', () => {
  checkAccessibility([<ColorInput label="Color input" />, <ColorInput aria-label="Color input" />]);
  itSupportsWrapperProps(ColorInput, defaultProps);
  itSupportsInputProps(ColorInput, defaultProps, 'ColorInput');
  itSupportsSystemProps({
    component: ColorInput,
    props: defaultProps,
    displayName: '@cestyle/core/ColorInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
