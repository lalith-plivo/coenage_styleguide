import React from 'react';
import { Chips, Chip, createStyles } from '@cestyle/core';

const code = `
import { createStyles, Chip, Chips } from '@cestyle/core';

const useStyles = createStyles((theme, _params, getRef) => ({
  iconWrapper: {
    ref: getRef('iconWrapper'),
  },

  checked: {
    backgroundColor: \`\${theme.colors.brand[2]} !important\`,
    color: theme.white,

    [\`& .\${getRef('iconWrapper')}\`]: {
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <Chips position="center" multiple classNames={classes} defaultValue={['react']}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="vue">Vue</Chip>
      <Chip value="svelte">Svelte</Chip>
    </Chips>
  );
}
`;

const useStyles = createStyles((theme, _params, getRef) => ({
  iconWrapper: {
    ref: getRef('iconWrapper'),
  },

  checked: {
    backgroundColor: `${theme.colors.brand[2]} !important`,
    color: theme.white,

    [`& .${getRef('iconWrapper')}`]: {
      color: theme.white,
    },
  },
}));

function Demo() {
  const { classes } = useStyles();

  return (
    <Chips position="center" multiple classNames={classes} defaultValue={['react']}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="vue">Vue</Chip>
      <Chip value="svelte">Svelte</Chip>
    </Chips>
  );
}

export const stylesApi: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
