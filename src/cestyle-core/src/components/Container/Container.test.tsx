import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Container, ContainerProps } from './Container';

const defaultProps: ContainerProps = {};

describe('@cestyle/core/Container', () => {
  itRendersChildren(Container, defaultProps);
  itSupportsSystemProps({
    component: Container,
    props: defaultProps,
    excludePadding: true,
    displayName: '@cestyle/core/Container',
    refType: HTMLDivElement,
  });
});
