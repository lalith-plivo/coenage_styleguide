import React, { useState } from 'react';
import { Modal, Group, Button } from '@cestyle/core';
import { AuthenticationForm } from '../../../shared/AuthenticationForm/AuthenticationForm';

const code = `
import { Modal } from '@cestyle/core';

function Demo() {
  return <Modal centered /* ...other props */ />;
};
`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Introduce yourself!" centered>
        <AuthenticationForm noShadow noPadding />
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open centered Modal</Button>
      </Group>
    </>
  );
}

export const centered: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
