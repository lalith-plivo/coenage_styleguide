import React from 'react';
import { Menu, MenuProps, Group } from '@cestyle/core';
import { menuItems } from './_menu-items';

function Wrapper(props: MenuProps) {
  return (
    <Group position="center" style={{ height: 200 }}>
      <Menu {...props}>{menuItems.slice(0, 3)}</Menu>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Menu } from '@cestyle/core';

function Demo() {
  return (
    <Menu${props}>
      {/* Menu items */}
    </Menu>
  )
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'shadow', type: 'size', initialValue: 'md', defaultValue: 'md' },
  ],
};
