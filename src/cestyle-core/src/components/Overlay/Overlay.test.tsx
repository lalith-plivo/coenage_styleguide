import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@cestyle/tests';
import { Overlay, OverlayProps } from './Overlay';

const defaultProps: OverlayProps<'div'> = {};

describe('@cestyle/core/Overlay', () => {
  itIsPolymorphic(Overlay, defaultProps);
  itRendersChildren(Overlay, defaultProps);
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: '@cestyle/core/Overlay',
    refType: HTMLDivElement,
  });
});
