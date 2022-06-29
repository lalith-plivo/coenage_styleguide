import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@cestyle/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@cestyle/core/ThemeIcon',
    refType: HTMLDivElement,
  });
});
