import { createStyles, CeStyleNumberSize } from '@cestyle/styles';

interface ListItemStyles {
  spacing: CeStyleNumberSize;
  center: boolean;
}

export default createStyles((theme, { spacing, center }: ListItemStyles, getRef) => {
  const itemWrapper = {
    ref: getRef('itemWrapper'),
    display: 'inline',
  } as const;

  return {
    itemWrapper,

    item: {
      lineHeight: center ? 1 : theme.lineHeight,

      '&:not(:first-of-type)': {
        marginTop: theme.fn.size({ size: spacing, sizes: theme.spacing }),
      },
    },

    withIcon: {
      listStyle: 'none',

      [`& .${itemWrapper.ref}`]: {
        display: 'inline-flex',
        alignItems: center ? 'center' : 'flex-start',
      },
    },

    itemIcon: {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginRight: theme.spacing.sm,
    },
  };
});
