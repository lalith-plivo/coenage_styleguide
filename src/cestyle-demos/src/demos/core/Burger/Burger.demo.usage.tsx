import React from 'react';
import { Group } from '@cestyle/core';
import { DemoBase } from './_base';

const code = `
import { useState } from 'react';
import { Burger } from '@cestyle/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <Burger
      opened={opened}
      onClick={() => setOpened((o) => !o)}
      title={title}
    />
  );
}
`;

export function Demo() {
  return (
    <Group position="center">
      <DemoBase />
    </Group>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
