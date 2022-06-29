import { createStyles, CeStyleNumberSize, CeStyleColor, keyframes } from '@cestyle/styles';

export type ProgressVariant = 'info' | 'warning' | 'success' | 'danger';

export const sizes = {
  xs: 3,
  sm: 5,
  md: 8,
  lg: 12,
  xl: 16,
};

export interface ProgressStylesParams {
  color: CeStyleColor;
  variant: ProgressVariant;
  size: CeStyleNumberSize;
  striped: boolean;
  animate: boolean;
}

const stripesAnimation = keyframes({
  from: { backgroundPosition: '0 0' },
  to: { backgroundPosition: '40px 0' },
});

export default createStyles((theme, { size, striped, animate, variant }: ProgressStylesParams) => ({
  root: {
    position: 'relative',
    height: theme.fn.size({ size, sizes }),
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.neutral[7] : theme.colors.neutral[7],
    // borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    borderRadius: '2px',
    overflow: 'hidden',
  },

  bar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: theme.fn.themeColor(
    //   color || theme.primaryColor,
    //   theme.fn.primaryShade(),
    //   false
    // ),
    backgroundColor: theme.fn.variant({ variant }).color,
    transition: 'width 100ms linear',
    animation: animate ? `${stripesAnimation} 1000ms linear infinite` : 'none',
    backgroundSize: '20px 20px',
    backgroundImage: striped
      ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
      : 'none',

    '&:last-of-type': {
      borderTopRightRadius: theme.fn.size({ size: 'sm', sizes: theme.radius }),
      borderBottomRightRadius: theme.fn.size({ size: 'sm', sizes: theme.radius }),
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.fn.size({ size: 'sm', sizes: theme.radius }),
      borderBottomLeftRadius: theme.fn.size({ size: 'sm', sizes: theme.radius }),
    },

    '@media (prefers-reduced-motion)': {
      transitionDuration: '0ms',
    },
  },

  label: {
    color: theme.white,
    fontSize: theme.fn.size({ size, sizes }) * 0.65,
    fontWeight: 700,
    userSelect: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));
