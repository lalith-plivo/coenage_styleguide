import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@cestyle/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@cestyle/core/Title',
    refType: HTMLHeadingElement,
  });
});
