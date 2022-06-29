import React, { forwardRef } from 'react';
import { DefaultProps, useCeStyleDefaultProps } from '@cestyle/styles';
import { Box } from '../Box';
import useStyles from './TypographyStylesProvider.styles';

export interface TypographyStylesProviderProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'div'> {
  /** Render any content to add CeStyle typography styles */
  children: React.ReactNode;
}

export const TypographyStylesProvider = forwardRef<HTMLDivElement, TypographyStylesProviderProps>(
  (props: TypographyStylesProviderProps, ref) => {
    const { className, ...others } = useCeStyleDefaultProps('TypographyStylesProvider', {}, props);
    const { classes, cx } = useStyles(null, { name: 'TypographyStylesProvider' });
    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

TypographyStylesProvider.displayName = '@cestyle/core/TypographyStylesProvider';
