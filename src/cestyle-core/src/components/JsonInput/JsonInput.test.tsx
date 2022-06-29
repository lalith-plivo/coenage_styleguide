import React from 'react';
import {
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  checkAccessibility,
} from '@cestyle/tests';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {
  label: 'test-label',
};

describe('@cestyle/core/JsonInput', () => {
  checkAccessibility([<JsonInput {...defaultProps} />]);
  itSupportsFocusEvents(JsonInput, defaultProps, 'textarea');
  itSupportsInputProps(JsonInput, defaultProps, 'JsonInput');
  itSupportsSystemProps({
    component: JsonInput,
    props: defaultProps,
    displayName: '@cestyle/core/JsonInput',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  });
});
