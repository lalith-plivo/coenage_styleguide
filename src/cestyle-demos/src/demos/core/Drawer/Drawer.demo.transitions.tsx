import React, { useState } from 'react';
import { Drawer, Button, Group } from '@cestyle/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
<Drawer
  transition="rotate-left"
  transitionDuration={250}
  transitionTimingFunction="ease"
/>
`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        title="Register"
        transition="rotate-left"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const transitions: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
