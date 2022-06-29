import React from 'react';
import { TextInput, Button, Group } from '@cestyle/core';
import { useModals } from '@cestyle/modals';

const code = `
import { TextInput, Button } from '@cestyle/core';
import { useModals } from '@cestyle/modals';

function Demo() {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: 'Subscribe to newsletter',
      children: (
        <>
          <TextInput label="Your email" placeholder="Your email" data-autofocus />
          <Button fullWidth onClick={() => modals.closeModal(id)} mt="md">
            Submit
          </Button>
        </>
      ),
    });
  };

  return <Button onClick={openContentModal}>Open content modal</Button>;
}
`;

function Demo() {
  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: 'Subscribe to newsletter',
      children: (
        <>
          <TextInput label="Your email" placeholder="Your email" data-autofocus />
          <Button fullWidth onClick={() => modals.closeModal(id)} mt="md">
            Submit
          </Button>
        </>
      ),
    });
  };

  return (
    <Group position="center">
      <Button onClick={openContentModal}>Open content modal</Button>
    </Group>
  );
}

export const content: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
