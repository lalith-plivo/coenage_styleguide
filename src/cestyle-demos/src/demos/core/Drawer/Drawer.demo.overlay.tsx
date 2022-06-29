import React, { useState } from 'react';
import { Drawer, Group, Button, useCeStyleTheme } from '@cestyle/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { Drawer, useCeStyleTheme } from '@cestyle/core';

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <Drawer
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      {/* Drawer content */}
    </Drawer>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = useCeStyleTheme();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <AuthenticationForm noPadding noShadow />
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}

export const overlay: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
