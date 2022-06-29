import React from 'react';
import { Group, Button } from '@cestyle/core';
import { showNotification } from '@cestyle/notifications';

const code = `
import { Group, Button } from '@cestyle/core';
import { showNotification } from '@cestyle/notifications';

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}`;

function Demo() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Default notification',
            message: 'Hey there, your code is awesome! 🤥',
          })
        }
      >
        Show notification
      </Button>
    </Group>
  );
}

export const base: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
