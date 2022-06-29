import { itSupportsSystemProps, itSupportsInputProps, itSupportsFocusEvents } from '@cestyle/tests';
import { DatePickerBase, DatePickerBaseProps } from './DatePickerBase';

const defaultProps: DatePickerBaseProps = {
  label: 'test-label',
  placeholder: 'test-placeholder',
  dropdownOpened: true,
  setDropdownOpened: () => {},
  onClear: () => {},
  transitionDuration: 0,
};

describe('@cestyle/dates/DatePickerBase', () => {
  itSupportsInputProps(DatePickerBase, defaultProps, 'DatePickerBase');
  itSupportsFocusEvents(DatePickerBase, defaultProps, 'input');
  itSupportsSystemProps({
    component: DatePickerBase,
    props: defaultProps,
    displayName: '@cestyle/dates/DatePickerBase',
    excludeOthers: true,
    refType: HTMLInputElement,
  });
});
