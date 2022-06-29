import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
} from './TypographyStylesProvider';

const defaultProps: TypographyStylesProviderProps = {
  children: 'test-children',
};

describe('@cestyle/core/TypographyStylesProvider', () => {
  itRendersChildren(TypographyStylesProvider, defaultProps);
  itSupportsSystemProps({
    component: TypographyStylesProvider,
    props: defaultProps,
    displayName: '@cestyle/core/TypographyStylesProvider',
    refType: HTMLDivElement,
  });
});
