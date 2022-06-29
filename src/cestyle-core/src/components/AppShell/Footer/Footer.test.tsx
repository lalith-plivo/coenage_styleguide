import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Footer, FooterProps } from './Footer';

const defaultProps: FooterProps = {
  height: 60,
  children: 'test-footer',
};

describe('@cestyle/core/Footer', () => {
  itRendersChildren(Footer, defaultProps);
  itSupportsSystemProps({
    component: Footer,
    props: defaultProps,
    displayName: '@cestyle/core/Footer',
    refType: HTMLElement,
  });
});
