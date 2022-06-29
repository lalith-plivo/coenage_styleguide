import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, useCeStyleDefaultProps } from '@cestyle/styles';
import { Text } from '../Text';
import { Loader } from '../Loader';
import { CloseButton } from '../ActionIcon';
import { Box } from '../Box';
import useStyles from './Notification.styles';

export type NotificationStylesNames = Exclude<Selectors<typeof useStyles>, 'withIcon'>;

export type NotificationVariant = 'info' | 'warning' | 'success' | 'danger';

export interface NotificationProps
  extends DefaultProps<NotificationStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Called when close button is clicked */
  onClose?(): void;

  /** Controls Alert background, color and border styles, defaults to light */
  variant?: NotificationVariant;

  /** Notification icon, replaces color line */
  icon?: React.ReactNode;

  /** Notification title, displayed before body */
  title?: React.ReactNode;

  /** Notification body, place main text here */
  children?: React.ReactNode;

  /** Replaces colored line or icon with Loader component */
  loading?: boolean;

  /** Removes close button */
  disallowClose?: boolean;

  /** Props spread to close button */
  closeButtonProps?: React.ComponentPropsWithoutRef<'button'> & { [key: string]: any };
}

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (props: NotificationProps, ref) => {
    const {
      className,
      variant,
      loading,
      disallowClose,
      title,
      icon,
      children,
      onClose,
      closeButtonProps,
      classNames,
      styles,
      ...others
    } = useCeStyleDefaultProps('Notification', {}, props);

    const { classes, cx } = useStyles({ variant }, { classNames, styles, name: 'Notification' });
    const withIcon = icon || loading;

    return (
      <Box
        className={cx(classes.root, { [classes.withIcon]: withIcon }, className)}
        role="alert"
        ref={ref}
        {...others}
      >
        {icon && !loading && <div className={classes.icon}>{icon}</div>}
        {loading && <Loader size={28} className={classes.loader} />}

        <div className={classes.body}>
          {title && (
            <Text className={classes.title} size="sm" weight="semibold">
              {title}
            </Text>
          )}

          <Text color="dimmed" className={classes.description} size="sm">
            {children}
          </Text>
        </div>

        {!disallowClose && (
          <CloseButton
            {...closeButtonProps}
            iconSize={16}
            color="gray"
            onClick={onClose}
            variant="hover"
            className={classes.closeButton}
          />
        )}
      </Box>
    );
  }
);

Notification.displayName = '@cestyle/core/Notification';
