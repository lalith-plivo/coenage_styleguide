import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { ScrollArea, ScrollAreaProps } from './ScrollArea';

const defaultProps: ScrollAreaProps = {};

describe('@cestyle/core/ScrollArea', () => {
  itRendersChildren(ScrollArea, defaultProps);
  itSupportsSystemProps({
    component: ScrollArea,
    props: defaultProps,
    displayName: '@cestyle/core/ScrollArea',
    refType: HTMLDivElement,
  });
});
