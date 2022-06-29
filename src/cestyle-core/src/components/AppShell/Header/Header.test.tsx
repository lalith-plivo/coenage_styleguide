import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Header, HeaderProps } from './Header';

const defaultProps: HeaderProps = {
  height: 60,
  children: 'test-header',
};

describe('@cestyle/core/Header', () => {
  itRendersChildren(Header, defaultProps);
  itSupportsSystemProps({
    component: Header,
    props: defaultProps,
    displayName: '@cestyle/core/Header',
    refType: HTMLElement,
  });
});
