import React from 'react';
import { createStyles } from '@cestyle/core';

const code = `
import { createStyles } from '@cestyle/core';

const useStyles = createStyles((theme) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.brand[2],

    // Media query with value from theme
    [\`@media (max-width: \${theme.breakpoints.xl}px)\`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}
`;

const useStyles = createStyles((theme) => ({
  container: {
    height: 100,
    backgroundColor: theme.colors.brand[2],

    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
      backgroundColor: theme.colors.pink[6],
    },

    // Static media query
    '@media (max-width: 800px)': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}));

function Demo() {
  const { classes } = useStyles();
  return <div className={classes.container} />;
}

export const createStylesMedia: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
