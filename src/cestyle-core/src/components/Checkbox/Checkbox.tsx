import { useUuid } from '@cestyle/hooks';
import {
  CeStyleSize,
  DefaultProps,
  extractSystemStyles,
  Selectors,
  useCeStyleDefaultProps,
} from '@cestyle/styles';
import React, { forwardRef } from 'react';
import { Box } from '../Box';
import useStyles from './Checkbox.styles';
import { CheckboxIcon } from './CheckboxIcon';

export type CheckboxStylesNames = Selectors<typeof useStyles>;

export interface CheckboxProps
  extends DefaultProps<CheckboxStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size'> {
  // /** Checkbox checked and indeterminate state color from theme, defaults to theme.primaryColor */
  // color?: CeStyleColor;

  // /** Radius from theme.radius, or number to set border-radius in px */
  // radius?: CeStyleNumberSize;

  /** Predefined label font-size and checkbox width and height in px */
  size?: CeStyleSize;

  /** Checkbox label */
  label?: React.ReactNode;

  /** Indeterminate state of checkbox, overwrites checked */
  indeterminate?: boolean;

  /** Props spread to wrapper element */
  wrapperProps?: { [key: string]: any };

  /** Id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Check/uncheck transition duration, set to 0 to disable all transitions */
  transitionDuration?: number;

  /** Replace default icon */
  icon?: React.FC<{ indeterminate: boolean; className: string }>;

  /** Static selector base */
  __staticSelector?: string;
}

const defaultProps: Partial<CheckboxProps> = {
  size: 'sm',
  __staticSelector: 'Checkbox',
  transitionDuration: 100,
  icon: CheckboxIcon,
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props: CheckboxProps, ref) => {
  const {
    className,
    style,
    sx,
    checked,
    // color,
    label,
    indeterminate,
    id,
    size,
    // radius,
    wrapperProps,
    children,
    classNames,
    styles,
    transitionDuration,
    icon: Icon,
    __staticSelector,
    ...others
  } = useCeStyleDefaultProps('Checkbox', defaultProps, props);

  const uuid = useUuid(id);
  const { systemStyles, rest } = extractSystemStyles(others);
  const { classes, cx } = useStyles(
    { transitionDuration },
    { classNames, styles, name: __staticSelector }
  );

  return (
    <Box
      className={cx(classes.root, className)}
      style={style}
      sx={sx}
      {...systemStyles}
      {...wrapperProps}
    >
      <div className={classes.inner}>
        <input
          id={uuid}
          ref={ref}
          type="checkbox"
          className={classes.input}
          checked={indeterminate || checked}
          {...rest}
        />

        <Icon indeterminate={indeterminate} className={classes.icon} />
      </div>

      {label && (
        <label className={classes.label} htmlFor={uuid}>
          {label}
        </label>
      )}
    </Box>
  );
});

Checkbox.displayName = '@cestyle/core/Checkbox';
