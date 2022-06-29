import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Skeleton, SkeletonProps } from './Skeleton';

const defaultProps: SkeletonProps = {};

describe('@cestyle/core/Skeleton', () => {
  itRendersChildren(Skeleton, defaultProps);
  itSupportsSystemProps({
    component: Skeleton,
    props: defaultProps,
    displayName: '@cestyle/core/Skeleton',
    refType: HTMLDivElement,
  });
});
