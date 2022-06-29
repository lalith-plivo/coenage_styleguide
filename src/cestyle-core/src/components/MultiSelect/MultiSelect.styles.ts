import { createStyles, CeStyleSize } from '@cestyle/styles';
import { INPUT_SIZES } from '../Input';

export interface MultiSelectStylesParams {
  size: CeStyleSize;
  invalid: boolean;
}

export default createStyles((theme, { size, invalid }: MultiSelectStylesParams) => ({
  wrapper: {
    position: 'relative',
  },

  values: {
    minHeight: theme.fn.size({ size, sizes: INPUT_SIZES }) - 2,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: -theme.spacing.xs / 2,
    paddingTop: theme.spacing.xs / 2 - 2,
    paddingBottom: theme.spacing.xs / 2 - 2,
    boxSizing: 'border-box',
  },

  value: {
    margin: `${theme.spacing.xs / 2 - 2}px ${theme.spacing.xs / 2}px`,
  },

  searchInput: {
    flex: 1,
    minWidth: 60,
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    padding: 0,
    margin: theme.spacing.xs / 2,
    appearance: 'none',
    color: 'inherit',

    '&::placeholder': {
      color: invalid
        ? theme.colors.danger[theme.colorScheme === 'dark' ? 1 : 1]
        : theme.colorScheme === 'dark'
          ? theme.typography_light
          : theme.typography_light,
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  searchInputEmpty: {
    width: '100%',
  },

  searchInputInputHidden: {
    width: 0,
    height: 0,
    margin: 0,
    overflow: 'hidden',
  },

  searchInputPointer: {
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  input: {
    cursor: 'pointer',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
}));
