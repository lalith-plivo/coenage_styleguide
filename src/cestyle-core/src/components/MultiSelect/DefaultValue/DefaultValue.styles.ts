import { createStyles, CeStyleNumberSize, CeStyleSize } from '@cestyle/styles';

interface DefaultLabelStyles {
  size: CeStyleSize;
  radius: CeStyleNumberSize;
  disabled: boolean;
}

const sizes = {
  xs: 16,
  sm: 20,
  md: 26,
  lg: 30,
  xl: 36,
};

const fontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

export default createStyles((theme, { size, disabled }: DefaultLabelStyles) => ({
  defaultValue: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: disabled
      ? theme.colorScheme === 'dark'
        ? theme.colors.neutral[7]
        : theme.colors.neutral[7]
      : theme.colorScheme === 'dark'
      ? theme.colors.neutral[7]
      : theme.colors.neutral[7],
    color: disabled
      ? theme.colorScheme === 'dark'
        ? theme.black
        : theme.black
      : theme.colorScheme === 'dark'
      ? theme.black
      : theme.black,
    height: theme.fn.size({ size: 'sm', sizes }),
    paddingLeft: 10,
    paddingRight: disabled ? theme.fn.size({ size, sizes: theme.spacing }) : 0,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fn.size({ size, sizes: fontSizes }),
    cursor: disabled ? 'not-allowed' : 'default',
    userSelect: 'none',
    maxWidth: 'calc(100% - 20px)',
  },

  defaultValueRemove: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    marginLeft: theme.fn.size({ size, sizes: theme.spacing }) / 6,
  },

  defaultValueLabel: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));
