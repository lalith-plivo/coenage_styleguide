import React from 'react';
import { Menu, Group, Button } from '@cestyle/core';
import { menuItems } from './_menu-items';

const code = `
import { Menu, Button } from '@cestyle/core';

function Demo() {
  return (
    <>
      <Menu control={<button type="button">Button control</button>}>
        {/* Menu items */}
      </Menu>

      <Menu control={<Button>CeStyle Button</Button>}>
        {/* Menu items */}
      </Menu>
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu control={<button type="button">Button control</button>}>{menuItems}</Menu>
      <Menu control={<Button>CeStyle Button</Button>}>{menuItems}</Menu>
    </Group>
  );
}

export const controls: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
