import { createStyles, CeStyleNumberSize } from '@cestyle/styles';

interface CardSectionStyles {
  padding: CeStyleNumberSize;
  first?: boolean;
  last?: boolean;
}

export default createStyles((theme, { padding, first, last }: CardSectionStyles) => ({
  cardSection: {
    display: 'block',
    marginLeft: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    marginRight: -1 * theme.fn.size({ size: padding, sizes: theme.spacing }),
    marginTop: first ? -1 * theme.fn.size({ size: padding, sizes: theme.spacing }) : undefined,
    marginBottom: last ? -1 * theme.fn.size({ size: padding, sizes: theme.spacing }) : undefined,
  },
}));
