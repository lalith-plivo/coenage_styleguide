import {
  itRendersChildren,
  itSupportsFocusEvents,
  itSupportsSystemProps,
  itIsPolymorphic,
} from '@cestyle/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps<'button'> = {};

describe('@cestyle/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itIsPolymorphic(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@cestyle/core/UnstyledButton',
    refType: HTMLButtonElement,
  });
});
