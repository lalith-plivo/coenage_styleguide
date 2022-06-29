import { createStyles, CeStyleNumberSize } from '@cestyle/styles';

export interface DialogStylesParams {
  size: CeStyleNumberSize;
}

const sizes = {
  xs: 160,
  sm: 200,
  md: 340,
  lg: 400,
  xl: 500,
};

export default createStyles((theme, { size }: DialogStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    color: theme.colorScheme === 'dark' ? theme.black : theme.black,
    position: 'relative',
    width: theme.fn.size({ size, sizes }),
    maxWidth: '100%',
    minHeight: 50,
    backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.white,
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing.md / 2,
    right: theme.spacing.md / 2,
  },
}));
