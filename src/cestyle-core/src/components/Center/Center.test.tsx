import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@cestyle/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps<'div'> = {
  children: 'test-center',
};

describe('@cestyle/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@cestyle/core/Center',
    refType: HTMLDivElement,
  });
});
