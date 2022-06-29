import {
  createStyles,
  CeStyleSize,
  CeStyleSizes,
  CeStyleColor,
  CeStyleTheme,
} from '@cestyle/styles';

export type ButtonVariant =
  | 'filled'
  | 'outline'
  | 'light'
  | 'gradient'
  | 'white'
  | 'default'
  | 'subtle';

export interface ButtonStylesParams {
  color: CeStyleColor;
  size: CeStyleSize;
  fullWidth: boolean;
  compact: boolean;
}

const sizes = {
  xs: {
    padding: '8px 12px',
  },

  sm: {
    padding: '8px 12px',
  },

  md: {
    padding: '10px 20px',
  },

  lg: {
    padding: '12px 20px',
  },

  xl: {
    padding: '14px 24px',
  },

  'compact-xs': {
    height: 22,
    padding: '0 7px',
  },

  'compact-sm': {
    height: 26,
    padding: '0 8px',
  },

  'compact-md': {
    height: 30,
    padding: '0 10px',
  },

  'compact-lg': {
    height: 34,
    padding: '0 12px',
  },

  'compact-xl': {
    height: 40,
    padding: '0 14px',
  },
};

export const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {} as CeStyleSizes);

const getSizeStyles = ({ compact, size }: { compact: boolean; size: CeStyleSize }) => {
  if (!compact) {
    return sizes[size];
  }

  return sizes[`compact-${size}`];
};

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? 'block' : 'inline-block',
  width: fullWidth ? '100%' : 'auto',
});

interface GetVariantStyles {
  theme: CeStyleTheme;
  color: CeStyleColor;
  variant: ButtonVariant;
}

function getVariantStyles({ variant, theme, color }: GetVariantStyles) {
  const colors = theme.fn.btnVariant({ color, variant });

  return {
    border: `1px solid ${colors.border}`,
    backgroundColor: colors.background,
    backgroundImage: colors.background,
    color: colors.color,
    ...theme.fn.hover({
      backgroundColor: colors.hover,
      boxShadow: variant === 'filled' ? '0px 8px 8px rgba(123, 97, 255, 0.2)' : 'none',
    }),
  };
}

export default createStyles(
  (theme, { color, size, fullWidth, compact }: ButtonStylesParams, getRef) => {
    return {
      loading: {
        ref: getRef('loading'),
        pointerEvents: 'none',
        opacity: 0.8,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -1,
          left: -1,
          right: -1,
          bottom: -1,
          cursor: 'not-allowed',
        },
      },

      outline: getVariantStyles({ variant: 'outline', theme, color }),
      filled: getVariantStyles({ variant: 'filled', theme, color }),
      light: getVariantStyles({ variant: 'light', theme, color }),
      default: getVariantStyles({ variant: 'default', theme, color }),
      white: getVariantStyles({ variant: 'white', theme, color }),
      subtle: getVariantStyles({ variant: 'subtle', theme, color }),

      root: {
        ...getSizeStyles({ compact, size }),
        ...theme.fn.fontStyles(),
        ...theme.fn.focusStyles(),
        ...getWidthStyles(fullWidth),
        fontWeight: 600,
        position: 'relative',
        lineHeight: '150%',
        fontSize: theme.fn.size({ size, sizes: theme.btnFontSizes }),
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        boxSizing: 'border-box',
        textDecoration: 'none',
        cursor: 'pointer',
        appearance: 'none',
        WebkitAppearance: 'none',

        '&:not(:disabled):active': {
          transform: 'translateY(1px)',
        },

        [`&:not(.${getRef('loading')}):disabled`]: {
          borderColor: 'transparent',
          // backgroundColor:
          //   theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],
          // color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
          backgroundColor: theme.colors.neutral[7],
          color: theme.colors.neutral[4],
          cursor: 'not-allowed',
        },
      },

      icon: {
        display: 'flex',
        alignItems: 'center',
      },

      leftIcon: {
        marginRight: 12,
      },

      rightIcon: {
        marginLeft: 12,
      },

      inner: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        overflow: 'visible',
      },

      label: {
        whiteSpace: 'nowrap',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      },
    };
  }
);
