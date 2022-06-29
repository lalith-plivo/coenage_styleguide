import React, { forwardRef } from 'react';
import {
  DefaultProps,
  CeStyleNumberSize,
  CeStyleColor,
  Selectors,
  useCeStyleDefaultProps,
} from '@cestyle/styles';
import { Box } from '../Box';
import useStyles from './Progress.styles';
import { Text } from '../Text';

export type ProgressStylesNames = Selectors<typeof useStyles>;

export type ProgressVariant = 'info' | 'warning' | 'success' | 'danger';

export interface ProgressProps
  extends DefaultProps<ProgressStylesNames>,
    React.ComponentPropsWithoutRef<'div'> {
  /** Percent of filled bar (0-100) */
  value?: number;

  /** Progress color from theme */
  color?: CeStyleColor;

  /** Predefined progress height or number for height in px */
  size?: CeStyleNumberSize;

  // /** Predefined progress radius from theme.radius or number for height in px */
  // radius?: CeStyleNumberSize;

  /** Adds stripes */
  striped?: boolean;

  /** Whether to animate striped progress bars */
  animate?: boolean;

  /** Text to be placed inside the progress bar */
  label?: string;

  /** Replaces value if present, renders multiple sections instead of single one */
  sections?: { value: number; color: CeStyleColor; label?: string }[];

  /** Controls Alert background, color and border styles, defaults to info */
  variant?: ProgressVariant;
}

function getCumulativeSections(
  sections: { value: number; color: CeStyleColor; label?: string }[]
): { value: number; color: CeStyleColor; accumulated: number; label?: string }[] {
  return sections.reduce(
    (acc, section) => {
      acc.sections.push({ ...section, accumulated: acc.accumulated });
      acc.accumulated += section.value;
      return acc;
    },
    { accumulated: 0, sections: [] }
  ).sections;
}

const defaultProps: Partial<ProgressProps> = {
  size: 'md',
  // radius: 'sm',
  striped: false,
  animate: false,
  label: '',
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>((props: ProgressProps, ref) => {
  const {
    className,
    value,
    color,
    size,
    variant,
    striped,
    animate,
    label,
    'aria-label': ariaLabel,
    classNames,
    styles,
    sections,
    ...others
  } = useCeStyleDefaultProps('Progress', defaultProps, props);

  const { classes, cx, theme } = useStyles(
    { color, size, striped: striped || animate, animate, variant },
    { classNames, styles, name: 'Progress' }
  );

  const segments = Array.isArray(sections)
    ? getCumulativeSections(sections).map((section, index) => (
        <Box
          key={index}
          className={classes.bar}
          sx={{
            width: `${section.value}%`,
            left: `${section.accumulated}%`,
            backgroundColor: theme.fn.themeColor(section.color, theme.fn.primaryShade(), false),
          }}
        >
          {section.label && <Text className={classes.label}>{section.label}</Text>}
        </Box>
      ))
    : null;

  return (
    <Box className={cx(classes.root, className)} ref={ref} {...others}>
      {segments || (
        <div
          role="progressbar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          aria-label={ariaLabel}
          className={classes.bar}
          style={{ width: `${value}%` }}
        >
          {label ? <Text className={classes.label}>{label}</Text> : ''}
        </div>
      )}
    </Box>
  );
});

Progress.displayName = '@cestyle/core/Progress';
