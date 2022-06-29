import { createStyles, CeStyleSize } from '@cestyle/core';

interface DayStyles {
  size: CeStyleSize;
  fullWidth: boolean;
  hideOutsideDates: boolean;
}

export const sizes = {
  xs: 34,
  sm: 38,
  md: 46,
  lg: 58,
  xl: 66,
};

export default createStyles((theme, { size, fullWidth, hideOutsideDates }: DayStyles, getRef) => {
  const weekend = { ref: getRef('weekend') };
  const outside = { ref: getRef('outside') };
  const selected = { ref: getRef('selected') };
  const inRange = { ref: getRef('inRange') };
  const firstInRange = { ref: getRef('firstInRange') };
  const lastInRange = { ref: getRef('lastInRange') };

  return {
    weekend,
    outside,
    selected,
    inRange,
    firstInRange,
    lastInRange,

    day: {
      ...theme.fn.fontStyles(),
      ...theme.fn.focusStyles(),
      position: 'relative',
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      width: fullWidth ? '100%' : theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
      lineHeight: `${theme.fn.size({ size, sizes })}px`,
      fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
      padding: 0,
      borderRadius: theme.radius.sm,
      border: 'none',
      cursor: 'pointer',
      userSelect: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

      '&:disabled': {
        pointerEvents: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
      },

      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      }),

      [`&.${weekend.ref}:not(:disabled)`]: {
        color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
      },

      [`&.${outside.ref}`]: {
        display: hideOutsideDates ? 'none' : undefined,
        color: `${
          theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
        } !important`,
      },

      [`&.${inRange.ref}:not(:disabled)`]: {
        backgroundColor: theme.fn.variant({ variant: 'light' }).background,
        borderRadius: 0,
      },

      [`&.${selected.ref}:not(:disabled)`]: {
        backgroundColor: theme.fn.variant({ variant: 'filled' }).background,
        color: theme.white,
      },

      [`&.${firstInRange.ref}:not(:disabled)`]: {
        borderTopLeftRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm,
      },

      [`&.${lastInRange.ref}:not(:disabled)`]: {
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
      },
    },
  };
});
