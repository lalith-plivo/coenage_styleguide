import React, { forwardRef } from 'react';
import { DefaultProps, CeStyleColor, useCeStyleDefaultProps } from '@cestyle/styles';
import { Box } from '../Box';
import useStyles from './Mark.styles';

export interface MarkProps extends DefaultProps, React.ComponentPropsWithoutRef<'mark'> {
  /** Background color from theme.colors */
  color?: CeStyleColor;
}

const defaultProps: Partial<MarkProps> = {
  color: 'yellow',
};

export const Mark = forwardRef<HTMLElement, MarkProps>((props: MarkProps, ref) => {
  const { color, className, classNames, styles, ...others } = useCeStyleDefaultProps(
    'Mark',
    defaultProps,
    props
  );

  const { classes, cx } = useStyles({ color }, { classNames, styles, name: 'Mark' });
  return <Box component="mark" ref={ref} className={cx(classes.root, className)} {...others} />;
});

Mark.displayName = '@cestyle/core/Mark';
