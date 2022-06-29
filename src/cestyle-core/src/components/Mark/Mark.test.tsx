import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@cestyle/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@cestyle/core/Mark',
    refType: HTMLElement,
  });
});
