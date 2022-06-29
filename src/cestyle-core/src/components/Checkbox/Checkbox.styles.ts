import { createStyles, CeStyleSize, CeStyleColor, CeStyleNumberSize } from '@cestyle/styles';

export const sizes = {
  xs: 16,
  sm: 18,
  md: 24,
  lg: 30,
  xl: 36,
};

const iconSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 16,
  xl: 20,
};

export interface CheckboxStylesParams {
  transitionDuration: number;
}

export default createStyles((theme, { transitionDuration }: CheckboxStylesParams, getRef) => {
  const _size = theme.fn.size({ size: 'sm', sizes });

  return {
    icon: {
      ref: getRef('icon'),
      color: theme.white,
      transform: 'translateY(5px) scale(0.5)',
      opacity: 0,
      transitionProperty: 'opacity, transform',
      transitionTimingFunction: 'ease',
      transitionDuration: `${transitionDuration}ms`,
      pointerEvents: 'none',
      width: theme.fn.size({ size: 'sm', sizes: iconSizes }),
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: 'auto',

      '@media (prefers-reduced-motion)': {
        transitionDuration: '0ms',
      },
    },

    root: {
      display: 'flex',
      alignItems: 'center',
    },

    inner: {
      position: 'relative',
      width: _size,
      height: _size,
    },

    label: {
      ...theme.fn.fontStyles(),
      WebkitTapHighlightColor: 'transparent',
      paddingLeft: 8,
      fontSize: theme.fontSizes.sm,
      lineHeight: 1.5,
      color: theme.colorScheme === 'dark' ? theme.black : theme.black,
    },

    input: {
      ...theme.fn.focusStyles(),
      appearance: 'none',
      backgroundColor: theme.colorScheme === 'dark' ? theme.white : theme.white,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.neutral[5] : theme.colors.neutral[5]
      }`,
      width: _size,
      height: _size,
      borderRadius: theme.fn.radius('sm'),
      padding: 0,
      display: 'block',
      margin: 0,
      transition: `border-color ${transitionDuration}ms ease, background-color ${transitionDuration}ms ease`,

      '&:checked': {
        backgroundColor: theme.colors.info[1],
        borderColor: theme.colors.info[1],

        [`& + .${getRef('icon')}`]: {
          opacity: 1,
          transform: 'translateY(0) scale(1)',
        },
      },

      '&:disabled': {
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.neutral[5] : theme.colors.neutral[5],
        borderColor:
          theme.colorScheme === 'dark' ? theme.colors.neutral[6] : theme.colors.neutral[6],
        cursor: 'not-allowed',

        [`& + .${getRef('icon')}`]: {
          color: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        },
      },
    },
  };
});
