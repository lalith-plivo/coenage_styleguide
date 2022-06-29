import { createStyles, CeStyleNumberSize, CeStyleShadow } from '@cestyle/styles';

export interface PaperStylesParams {
  shadow: CeStyleShadow;
  withBorder: boolean;
}

export default createStyles((theme, { shadow, withBorder }: PaperStylesParams) => ({
  root: {
    outline: 0,
    WebkitTapHighlightColor: 'transparent',
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.black : theme.black,
    backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.white,
    boxSizing: 'border-box',
    boxShadow: theme.shadows[shadow] || shadow || 'none',
    border: withBorder
      ? `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]}`
      : undefined,
  },
}));
