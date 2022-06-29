import React, { forwardRef } from 'react';
import {
  DefaultProps,
  CeStyleNumberSize,
  getDefaultZIndex,
  useCeStyleDefaultProps,
} from '@cestyle/styles';
import { Overlay } from '../Overlay';
import { Transition } from '../Transition';
import { Loader, LoaderProps } from '../Loader';
import { Box } from '../Box';
import useStyles from './LoadingOverlay.styles';

export interface LoadingOverlayProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Provide custom loader */
  loader?: React.ReactNode;

  /** Loader component props */
  loaderProps?: LoaderProps;

  /** Sets overlay opacity */
  overlayOpacity?: number;

  /** Sets overlay color, defaults to theme.white in light theme and to theme.colors.dark[5] in dark theme */
  overlayColor?: string;

  /** Loading overlay z-index */
  zIndex?: number;

  /** If visible overlay will take 100% width and height of first parent with relative position and overlay all of its content */
  visible: boolean;

  /** Animation duration in ms */
  transitionDuration?: number;

  /** Exit transition duration in ms */
  exitTransitionDuration?: number;

  /** Value from theme.radius or number to set border-radius in px */
  radius?: CeStyleNumberSize;
}

const defaultProps: Partial<LoadingOverlayProps> = {
  overlayOpacity: 0.75,
  transitionDuration: 200,
  zIndex: getDefaultZIndex('overlay'),
};

export const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>(
  (props: LoadingOverlayProps, ref) => {
    const {
      className,
      visible,
      loaderProps,
      overlayOpacity,
      overlayColor,
      transitionDuration,
      exitTransitionDuration,
      zIndex,
      style,
      loader,
      radius,
      classNames,
      styles,
      ...others
    } = useCeStyleDefaultProps('LoadingOverlay', defaultProps, props);
    const { classes, cx, theme } = useStyles(null, { name: 'LoadingOverlay', classNames, styles });

    return (
      <Transition
        duration={transitionDuration}
        exitDuration={exitTransitionDuration}
        mounted={visible}
        transition="fade"
      >
        {(transitionStyles) => (
          <Box
            className={cx(classes.root, className)}
            style={{ ...transitionStyles, ...style, zIndex }}
            ref={ref}
            {...others}
          >
            {loader ? (
              <div style={{ zIndex: zIndex + 1 }}>{loader}</div>
            ) : (
              <Loader style={{ zIndex: zIndex + 1 }} {...loaderProps} />
            )}

            <Overlay
              opacity={overlayOpacity}
              zIndex={zIndex}
              radius={radius}
              color={overlayColor || (theme.colorScheme === 'dark' ? theme.white : theme.white)}
            />
          </Box>
        )}
      </Transition>
    );
  }
);

LoadingOverlay.displayName = '@cestyle/core/LoadingOverlay';