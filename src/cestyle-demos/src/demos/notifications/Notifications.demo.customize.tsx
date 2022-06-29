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
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.brand[2],
                borderColor: theme.colors.brand[2],

                '&::before': { backgroundColor: theme.white },
              },

              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: theme.colors.blue[7] },
              },
            }),
          })
        }
      >
        Show customized notification
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
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.brand[2],
                borderColor: theme.colors.brand[2],

                '&::before': { backgroundColor: theme.white },
              },

              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: theme.colors.blue[7] },
              },
            }),
          })
        }
      >
        Show customized notification
      </Button>
    </Group>
  );
}

export const customize: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
