import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputRightSection,
  itSupportsInputIcon,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
  itSupportsInputWrapperProps,
} from '@cestyle/tests';
import { TimeRangeInput, TimeRangeInputProps } from './TimeRangeInput';

const defaultProps: TimeRangeInputProps = {
  label: 'test-label',
  hoursLabel: 'test-hours',
  minutesLabel: 'test-minutes',
  secondsLabel: 'test-seconds',
};

describe('@cestyle/dates/TimeRangeInput', () => {
  itSupportsInputRightSection(TimeRangeInput, defaultProps);
  itSupportsInputWrapperProps(TimeRangeInput, defaultProps, 'TimeRangeInput');
  itSupportsInputIcon(TimeRangeInput, defaultProps);
  itConnectsLabelAndInput(TimeRangeInput, defaultProps);
  itSupportsFocusEvents(TimeRangeInput, defaultProps, 'input');
  itSupportsSystemProps({
    component: TimeRangeInput,
    props: defaultProps,
    displayName: '@cestyle/dates/TimeRangeInput',
    refType: HTMLInputElement,
    excludeOthers: true,
  });

  checkAccessibility([
    <TimeRangeInput {...defaultProps} />,
    <TimeRangeInput {...defaultProps} withSeconds />,
  ]);
});
