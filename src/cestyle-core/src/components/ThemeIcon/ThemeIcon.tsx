import React, { forwardRef } from 'react';
import {
  DefaultProps,
  CeStyleNumberSize,
  CeStyleGradient,
  CeStyleColor,
  useCeStyleDefaultProps,
} from '@cestyle/styles';
import { Box } from '../Box';
import useStyles, { ThemeIconVariant } from './ThemeIcon.styles';

export interface ThemeIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Icon */
  children: React.ReactNode;

  /** Predefined width and height or number for width and height in px */
  size?: CeStyleNumberSize;

  /** Predefined border-radius from theme.radius or number for border-radius in px */
  radius?: CeStyleNumberSize;

  /** Icon color from theme */
  color?: CeStyleColor;

  /** Controls appearance */
  variant?: ThemeIconVariant;

  /** Controls gradient settings in gradient variant only */
  gradient?: CeStyleGradient;
}

const defaultProps: Partial<ThemeIconProps> = {
  size: 'md',
  variant: 'filled',
  gradient: { from: 'blue', to: 'cyan', deg: 45 },
};

export const ThemeIcon = forwardRef<HTMLDivElement, ThemeIconProps>(
  (props: ThemeIconProps, ref) => {
    const { className, size, radius, variant, color, children, gradient, ...others } =
      useCeStyleDefaultProps('ThemeIcon', defaultProps, props);

    const { classes, cx } = useStyles(
      {
        variant,
        radius,
        color,
        size,
        gradientFrom: gradient.from,
        gradientTo: gradient.to,
        gradientDeg: gradient.deg,
      },
      { name: 'ThemeIcon' }
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {children}
      </Box>
    );
  }
);

ThemeIcon.displayName = '@cestyle/core/ThemeIcon';
