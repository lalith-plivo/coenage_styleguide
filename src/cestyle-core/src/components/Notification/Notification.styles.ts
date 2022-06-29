import { createStyles } from '@cestyle/styles';

export interface NotificationStylesParams {
  variant: 'info' | 'warning' | 'success' | 'danger';
}

export default createStyles((theme, { variant }: NotificationStylesParams, getRef) => {
  const _radius = theme.fn.radius(2) as number;
  const topBottom = Math.min(Math.max(_radius / 1.2, 4), 30);
  const colors = theme.fn.variant({ variant });

  return {
    closeButton: {},

    icon: {
      ref: getRef('icon'),
      boxSizing: 'border-box',
      marginRight: theme.spacing.md,
      width: 28,
      height: 28,
      borderRadius: 28,
      display: 'flex',
      flex: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.white,
    },

    withIcon: {
      paddingLeft: theme.spacing.xs,

      '&::before': {
        display: 'none',
      },
    },

    root: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: 22,
      paddingRight: 5,
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.white,
      boxShadow: theme.shadows.lg,
      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: 6,
        top: topBottom,
        bottom: topBottom,
        left: 4,
        borderRadius: 4,
        backgroundColor: colors.color,
      },

      [`& .${getRef('icon')}`]: {
        backgroundColor: theme.white,
        color: colors.color,
      },
    },

    body: {
      flex: 1,
      overflow: 'hidden',
      marginRight: 10,
    },

    loader: {
      marginRight: theme.spacing.md,
    },

    title: {
      lineHeight: 1.5,
      marginBottom: 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.colorScheme === 'dark' ? theme.colors.neutral[0] : theme.colors.neutral[0],
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.colors.neutral[1] : theme.colors.neutral[2],
      lineHeight: 1.5,
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      '&:only-child': {
        color: theme.colorScheme === 'dark' ? theme.colors.neutral[0] : theme.colors.neutral[0],
      },
    },
  };
});
