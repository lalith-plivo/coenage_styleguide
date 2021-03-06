import React from 'react';
import { Group, Menu } from '@cestyle/core';
import { menuItems } from './_menu-items';

const code = `
import { Menu } from '@cestyle/core';

function Demo() {
  return (
    <Menu
      transition="rotate-right"
      transitionDuration={100}
      transitionTimingFunction="ease"
    >
      {/* Menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu transition="rotate-right" transitionDuration={100} transitionTimingFunction="ease">
        {menuItems}
      </Menu>
    </Group>
  );
}

export const transitions: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
