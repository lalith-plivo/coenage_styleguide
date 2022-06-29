import { createStyles, CeStyleNumberSize } from '@cestyle/styles';

export interface StackStylesParams {
  spacing: CeStyleNumberSize;
  align: React.CSSProperties['alignItems'];
  justify: React.CSSProperties['justifyContent'];
}

export default createStyles((theme, { spacing, align, justify }: StackStylesParams) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: align,
    justifyContent: justify,
    gap: theme.fn.size({ size: spacing, sizes: theme.spacing }),
  },
}));
