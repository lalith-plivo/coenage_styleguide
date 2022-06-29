import { createStyles, CeStyleSize } from '@cestyle/styles';

interface SelectItemsStyles {
  size: CeStyleSize;
}

export default createStyles((theme, { size }: SelectItemsStyles) => ({
  item: {
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: `8px 20px`,
    cursor: 'pointer',
    fontSize: theme.fn.size({ size: 'sm', sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.typography_light : theme.typography_light,
  },

  selected: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.info[0] : theme.colors.info[0],
    color: theme.colorScheme === 'dark' ? theme.black : theme.black,
    fontWeight: theme.fontWeights.medium,
  },

  hovered: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.info[0] : theme.colors.info[0],
    color: theme.colorScheme === 'dark' ? theme.black : theme.black,
  },

  nothingFound: {
    boxSizing: 'border-box',
    color: theme.colors.gray[6],
    paddingTop: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    paddingBottom: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    textAlign: 'center',
  },

  disabled: {
    cursor: 'not-allowed',
    color: theme.colors.neutral[6],
  },

  separator: {
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: `${theme.fn.size({ size, sizes: theme.spacing }) / 1.5}px ${theme.fn.size({
      size,
      sizes: theme.spacing,
    })}px`,
  },

  separatorLabel: {
    color: theme.colorScheme === 'dark' ? theme.typography_light : theme.typography_light,
  },
}));
