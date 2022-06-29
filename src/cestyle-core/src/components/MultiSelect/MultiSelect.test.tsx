import React from 'react';
import {
  itSupportsSystemProps,
  checkAccessibility,
  itSupportsInputIcon,
  itSupportsInputRightSection,
  itSupportsWrapperProps,
  itConnectsLabelAndInput,
  itSupportsFocusEvents,
  itSupportsInputWrapperProps,
} from '@cestyle/tests';
import { MultiSelect, MultiSelectProps } from './MultiSelect';

const defaultProps: MultiSelectProps = {
  withinPortal: false,
  transitionDuration: 0,
  label: 'test-multi-select',
  data: ['React', 'Angular', 'Svelte', 'Vue'],
  defaultValue: ['React', 'Angular'],
  id: 'test-multi-select',
};

describe('@cestyle/core/MultiSelect', () => {
  checkAccessibility([<MultiSelect {...defaultProps} initiallyOpened />]);
  itSupportsFocusEvents(MultiSelect, defaultProps, '#test-multi-select');
  itSupportsInputIcon(MultiSelect, defaultProps);
  itSupportsInputWrapperProps(MultiSelect, defaultProps, 'MultiSelect');
  itSupportsInputRightSection(MultiSelect, defaultProps);
  itSupportsWrapperProps(MultiSelect, defaultProps);
  itConnectsLabelAndInput(MultiSelect, defaultProps);
  itSupportsSystemProps({
    component: MultiSelect,
    props: defaultProps,
    displayName: '@cestyle/core/MultiSelect',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});
