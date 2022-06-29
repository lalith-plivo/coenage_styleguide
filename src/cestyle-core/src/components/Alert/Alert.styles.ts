import { createStyles } from '@cestyle/styles';

export interface AlertStylesParams {
  variant: 'info' | 'warning' | 'success' | 'danger';
}

export default createStyles((theme, { variant }: AlertStylesParams, getRef) => ({
  root: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    overflow: 'hidden',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    border: '1px solid transparent',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },

  body: {
    flex: 1,
  },

  title: {
    boxSizing: 'border-box',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  label: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  info: {
    backgroundColor: theme.fn.variant({ variant: 'info' }).background,
    color: theme.fn.variant({ variant: 'info' }).color,
  },

  warning: {
    backgroundColor: theme.fn.variant({ variant: 'warning' }).background,
    color: theme.fn.variant({ variant: 'warning' }).color,
  },

  success: {
    backgroundColor: theme.fn.variant({ variant: 'success' }).background,
    color: theme.fn.variant({ variant: 'success' }).color,
  },

  danger: {
    backgroundColor: theme.fn.variant({ variant: 'danger' }).background,
    color: theme.fn.variant({ variant: 'danger' }).color,
  },

  icon: {
    lineHeight: 1,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: theme.spacing.xs,
  },

  message: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: theme.fontSizes.sm,
  },

  closeButton: {
    ref: getRef('closeButton'),
    alignSelf: 'flex-start',
    color: theme.fn.variant({ variant }).color,
  },

  titlewrapper: {
    display: 'flex',
    alignItems: 'center',
  },
}));
