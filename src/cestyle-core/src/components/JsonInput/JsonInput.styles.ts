import { createStyles, CeStyleSize } from '@cestyle/styles';

export interface JsonInputStylesParams {
  size: CeStyleSize;
}

export default createStyles((theme, { size }: JsonInputStylesParams) => ({
  input: {
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
  },
}));
