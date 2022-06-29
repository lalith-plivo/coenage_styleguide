import React, { useState } from 'react';
import { Modal, Group, Button, useCeStyleTheme } from '@cestyle/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { Modal, useCeStyleTheme } from '@cestyle/core';

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
    >
      {/* Modal content */}
    </Modal>
  );
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);
  const theme = useCeStyleTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        <AuthenticationForm noPadding noShadow />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export const overlay: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
