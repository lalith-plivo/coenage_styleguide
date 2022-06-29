import { createStyles } from '@cestyle/styles';

export interface BlockquoteStylesParams {
  transitionDuration: number;
}

export default createStyles((theme, { transitionDuration }: BlockquoteStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    fontSize: theme.fontSizes.lg,
    lineHeight: theme.lineHeight,
    color: theme.colorScheme === 'dark' ? theme.black : theme.black,
    margin: 0,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
    transition: `transform ${transitionDuration}ms ease`,
  },

  inner: {
    display: 'flex',
  },

  body: {
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  icon: {
    color: theme.black,
    marginRight: theme.spacing.lg,
    marginTop: 2,
    width: 22,
  },

  cite: {
    display: 'block',
    fontSize: theme.fontSizes.sm,
    marginTop: theme.spacing.xs,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
