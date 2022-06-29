import React from 'react';
import { Group, Button, Text } from '@cestyle/core';
import { useModals } from '@cestyle/modals';

const code = `
import { Button, Text } from '@cestyle/core';
import { useModals } from '@cestyle/modals';

function Demo() {
  const modals = useModals();

  const openMultiStepModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      closeOnConfirm: false,
      labels: { confirm: 'Next modal', cancel: 'Close modal' },
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          title: 'This is modal at second layer',
          labels: { confirm: 'Close modal', cancel: 'Back' },
          closeOnConfirm: false,
          children: (
            <Text size="sm">When this modal is closed modals state will revert to first modal</Text>
          ),
          onConfirm: () => modals.closeAll(),
        }),
    });

  return <Button onClick={openMultiStepModal}>Open multiple steps modal</Button>;
}
`;

function Demo() {
  const modals = useModals();

  const openMultiStepModal = () =>
    modals.openConfirmModal({
      title: 'Please confirm your action',
      closeOnConfirm: false,
      labels: { confirm: 'Next modal', cancel: 'Close modal' },
      children: (
        <Text size="sm">
          This action is so important that you are required to confirm it with a modal. Please click
          one of these buttons to proceed.
        </Text>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          title: 'This is modal at second layer',
          labels: { confirm: 'Close modal', cancel: 'Back' },
          closeOnConfirm: false,
          children: (
            <Text size="sm">When this modal is closed modals state will revert to first modal</Text>
          ),
          onConfirm: () => modals.closeAll(),
        }),
    });

  return (
    <Group position="center">
      <Button onClick={openMultiStepModal}>Open multiple steps modal</Button>
    </Group>
  );
}

export const multipleSteps: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
