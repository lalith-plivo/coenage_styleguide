import { createStyles } from '@cestyle/core';

export default createStyles((theme) => ({
  wrapper: {
    paddingTop: 120,
    paddingBottom: 60,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  description: {
    lineHeight: 1.6,

    '@media (max-width: 960px)': {
      fontSize: theme.fontSizes.md,
    },
  },
}));
