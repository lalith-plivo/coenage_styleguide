import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@cestyle/tests';
import { Box, BoxProps } from './Box';

const defaultProps: BoxProps<'div'> = {};

describe('@cestyle/core/Box', () => {
  itRendersChildren(Box, defaultProps);
  itIsPolymorphic(Box, defaultProps);
  itSupportsSystemProps({
    component: Box,
    props: defaultProps,
    displayName: '@cestyle/core/Box',
    refType: HTMLDivElement,
  });
});
