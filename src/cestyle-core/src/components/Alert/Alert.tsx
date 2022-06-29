import React, { forwardRef } from 'react';
import { DefaultProps, CeStyleColor, Selectors, useCeStyleDefaultProps } from '@cestyle/styles';
import { useUuid } from '@cestyle/hooks';
import { CloseButton } from '../ActionIcon';
import { Box } from '../Box';
import useStyles from './Alert.styles';

export type AlertVariant = 'info' | 'warning' | 'success' | 'danger';
export type AlertStylesNames = Selectors<typeof useStyles>;

export interface AlertProps
  extends DefaultProps<AlertStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Alert title */
  title?: React.ReactNode;

  /** Controls Alert background, color and border styles, defaults to light */
  variant?: AlertVariant;

  /** Alert message */
  children: React.ReactNode;

  /** Icon displayed next to title */
  icon?: React.ReactNode;

  /** True to display close button */
  withCloseButton?: boolean;

  /** Called when close button is clicked */
  onClose?(): void;

  /** Close button aria-label */
  closeButtonLabel?: string;
}

const defaultProps: Partial<AlertProps> = {
  variant: 'info',
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>((props: AlertProps, ref) => {
  const {
    id,
    className,
    title,
    variant,
    children,
    classNames,
    icon,
    styles,
    onClose,
    withCloseButton,
    closeButtonLabel,
    ...others
  } = useCeStyleDefaultProps('Alert', defaultProps, props);

  const { classes, cx } = useStyles({ variant }, { classNames, styles, name: 'Alert' });

  const rootId = useUuid(id);

  const titleId = title && `${rootId}-title`;
  const bodyId = `${rootId}-body`;

  return (
    <Box
      id={rootId}
      role="alert"
      aria-labelledby={titleId}
      aria-describedby={bodyId}
      className={cx(classes.root, classes[variant], className)}
      ref={ref}
      {...others}
    >
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <div className={classes.titlewrapper}>
            {icon && <div className={classes.icon}>{icon}</div>}
            {title && (
              <div className={classes.title}>
                <span id={titleId} className={classes.label}>
                  {title}
                </span>
              </div>
            )}
          </div>
          {withCloseButton && (
            <CloseButton
              className={classes.closeButton}
              onClick={() => onClose?.()}
              variant="transparent"
              size={20}
              iconSize={20}
              aria-label={closeButtonLabel}
            />
          )}
        </div>
        <div className={classes.body}>
          <div id={bodyId} className={classes.message}>
            {children}
          </div>
        </div>
      </div>
    </Box>
  );
});

Alert.displayName = '@cestyle/core/Alert';
