import { createStyles, CeStyleNumberSize, keyframes } from '@cestyle/styles';

export interface SkeletonStylesParams {
  height: number | string;
  width: number | string;
  circle: boolean;
  radius: CeStyleNumberSize;
  animate: boolean;
}

export const fade = keyframes({
  'from, to': { opacity: 0.4 },
  '50%': { opacity: 1 },
});

export default createStyles(
  (theme, { height, width, radius, circle, animate }: SkeletonStylesParams) => ({
    root: {
      height,
      width: circle ? height : width,
      borderRadius: circle ? height : theme.fn.radius(radius),
      position: 'relative',
      overflow: 'hidden',
    },

    visible: {
      '&::before': {
        content: '""',
        position: 'absolute',
        background:
          theme.colorScheme === 'dark' ? theme.colors.neutral[6] : theme.colors.neutral[6],
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      },

      '&::after': {
        content: '""',
        position: 'absolute',
        background:
          theme.colorScheme === 'dark' ? theme.colors.neutral[7] : theme.colors.neutral[7],
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        animation: animate ? `${fade} 1200ms linear infinite` : 'none',
        zIndex: 11,
      },
    },
  })
);
