import React from 'react';
import { createStyles, Menu, Group } from '@cestyle/core';
import { menuItems } from './_menu-items';

const code = `
import { Menu, createStyles } from '@cestyle/core';

const useStyles = createStyles((theme) => ({
  itemHovered: {
    backgroundColor: theme.colors[theme.primaryColor][7],
    color: theme.white,
  },
}));

function Demo() {
  const { classes } = useStyles();
  return (
    <Menu classNames={classes}>
      {/* Menu items... */}
    </Menu>
  );
}
`;

const useStyles = createStyles((theme) => ({
  itemHovered: {
    backgroundColor: theme.colors[theme.primaryColor][7],
    color: theme.white,
  },
}));

function Demo() {
  const { classes } = useStyles();
  const items = [...menuItems];
  items.splice(4, 1);
  return (
    <Group position="center">
      <Menu classNames={classes}>{items}</Menu>
    </Group>
  );
}

export const stylesApi: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
