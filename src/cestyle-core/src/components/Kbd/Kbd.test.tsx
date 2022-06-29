import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = { children: 'test' };

describe('@cestyle/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@cestyle/core/Kbd',
    refType: HTMLElement,
  });
});
