import { createStyles } from '@cestyle/core';

export default createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));
