import React from 'react';
import { checkAccessibility, itConnectsLabelAndInput, itSupportsSystemProps } from '@cestyle/tests';
import { Radio, RadioProps } from './Radio';

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
};

describe('@cestyle/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  checkAccessibility([<Radio {...defaultProps} />]);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@cestyle/core/Radio',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
