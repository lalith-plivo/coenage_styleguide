import React, { forwardRef } from 'react';
import {
  DefaultProps,
  CeStyleSize,
  CeStyleNumberSize,
  CeStyleColor,
  Selectors,
  PolymorphicComponentProps,
  PolymorphicRef,
  useCeStyleDefaultProps,
} from '@cestyle/styles';
import { Box } from '../Box';
import useStyles, { heights, ButtonVariant } from './Button.styles';
import { Loader, LoaderProps } from '../Loader';

export type ButtonStylesNames = Selectors<typeof useStyles>;

export interface SharedButtonProps extends DefaultProps<ButtonStylesNames> {
  /** Predefined button size */
  size?: CeStyleSize;

  /** Button type attribute */
  type?: 'submit' | 'button' | 'reset';

  /** Button color from theme */
  color?: CeStyleColor;

  /** Adds icon before button label  */
  leftIcon?: React.ReactNode;

  /** Adds icon after button label  */
  rightIcon?: React.ReactNode;

  /** Sets button width to 100% of parent element */
  fullWidth?: boolean;

  /** Controls button appearance */
  variant?: ButtonVariant;

  /** Set text-transform to uppercase */
  uppercase?: boolean;

  /** Reduces vertical and horizontal spacing */
  compact?: boolean;

  /** Indicate loading state */
  loading?: boolean;

  /** Props spread to Loader component */
  loaderProps?: LoaderProps;

  /** Loader position relative to button label */
  loaderPosition?: 'left' | 'right';

  /** Button label */
  children?: React.ReactNode;

  /** Disabled state */
  disabled?: boolean;
}

export type ButtonProps<C> = PolymorphicComponentProps<C, SharedButtonProps>;

type ButtonComponent = (<C = 'button'>(props: ButtonProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<ButtonProps<any>> = {
  size: 'sm',
  type: 'button',
  variant: 'filled',
  loaderPosition: 'left',
};

export const Button: ButtonComponent = forwardRef(
  (props: ButtonProps<'button'>, ref: PolymorphicRef<'button'>) => {
    const {
      className,
      size,
      color,
      type,
      disabled,
      children,
      leftIcon,
      rightIcon,
      fullWidth,
      variant,
      component,
      uppercase,
      compact,
      loading,
      loaderPosition,
      loaderProps,
      classNames,
      styles,
      ...others
    } = useCeStyleDefaultProps('Button', defaultProps, props);

    const { classes, cx, theme } = useStyles(
      {
        color,
        size,
        fullWidth,
        compact,
      },
      { classNames, styles, name: 'Button' }
    );
    const colors = theme.fn.variant({ color, variant });
    const loader = (
      <Loader
        color={colors.color}
        size={theme.fn.size({ size, sizes: heights }) / 2}
        {...loaderProps}
      />
    );

    return (
      <Box
        component={component || 'button'}
        className={cx(classes[variant], { [classes.loading]: loading }, classes.root, className)}
        type={type}
        disabled={disabled || loading}
        ref={ref}
        onTouchStart={() => {}}
        {...others}
      >
        <div className={classes.inner}>
          {(leftIcon || (loading && loaderPosition === 'left')) && (
            <span className={cx(classes.icon, classes.leftIcon)}>
              {loading && loaderPosition === 'left' ? loader : leftIcon}
            </span>
          )}

          <span
            className={classes.label}
            style={{ textTransform: uppercase ? 'uppercase' : undefined }}
          >
            {children}
          </span>

          {(rightIcon || (loading && loaderPosition === 'right')) && (
            <span className={cx(classes.icon, classes.rightIcon)}>
              {loading && loaderPosition === 'right' ? loader : rightIcon}
            </span>
          )}
        </div>
      </Box>
    );
  }
) as any;

Button.displayName = '@cestyle/core/Button';