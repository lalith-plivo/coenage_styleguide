import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Stack, StackProps } from './Stack';

const defaultProps: StackProps = {};

describe('@cestyle/core/Stack', () => {
  itRendersChildren(Stack, defaultProps);
  itSupportsSystemProps({
    component: Stack,
    props: defaultProps,
    displayName: '@cestyle/core/Stack',
    refType: HTMLDivElement,
  });
});
