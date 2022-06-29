import React, { forwardRef } from 'react';
import {
  DefaultProps,
  CeStyleSize,
  CeStyleGradient,
  PolymorphicComponentProps,
  PolymorphicRef,
  useCeStyleDefaultProps,
  CeStyleColor,
} from '@cestyle/styles';
import { Box } from '../Box';
import useStyles from './Text.styles';

export interface SharedTextProps extends DefaultProps {
  /** Predefined font-size from theme.fontSizes */
  size?: CeStyleSize;

  /** Text color from theme or dimmed variant */
  color?: 'dimmed' | CeStyleColor;

  /** Sets font-weight css property */
  weight?: 'bold' | 'semibold' | 'medium' | 'regular';

  /** Sets text-transform css property */
  transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';

  /** Sets text-align css property */
  align?: 'left' | 'center' | 'right' | 'justify';

  /** Link or text variant */
  variant?: 'text' | 'link';

  /** CSS -webkit-line-clamp property */
  lineClamp?: number;

  /** Sets line-height to 1 for centering */
  inline?: boolean;

  /** Underline the text */
  underline?: boolean;

  /** Inherit font properties from parent element */
  inherit?: boolean;

  /** Controls gradient settings in gradient variant only */
  gradient?: CeStyleGradient;
}

export type TextProps<C> = PolymorphicComponentProps<C, SharedTextProps>;

type TextComponent = (<C = 'div'>(props: TextProps<C>) => React.ReactElement) & {
  displayName?: string;
};

const defaultProps: Partial<TextProps<any>> = {
  size: 'sm',
  variant: 'text',
  inline: false,
  inherit: false,
};

export const Text: TextComponent = forwardRef(
  (props: TextProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const {
      className,
      component,
      size = 'md',
      weight = 'regular',
      transform,
      color,
      align,
      variant = 'text',
      lineClamp,
      inline = false,
      inherit = false,
      underline,
      classNames,
      styles,
      ...others
    } = useCeStyleDefaultProps('Text', defaultProps, props);

    const { classes, cx } = useStyles(
      {
        variant,
        color,
        size,
        lineClamp,
        inline,
        inherit,
        underline,
        weight,
        transform,
        align,
      },
      { classNames, styles, name: 'Text' }
    );

    return (
      <Box
        ref={ref}
        component={component || 'div'}
        className={cx(classes.root, className)}
        {...others}
      />
    );
  }
) as any;

Text.displayName = '@cestyle/core/Text';
