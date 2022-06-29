import React from 'react';
import { Button, Group } from '@cestyle/core';

const code = `
<Button
  sx={(theme) => ({
    borderColor: theme.colors.blue[9],

    '&:hover': {
      backgroundColor: theme.colors.blue[9],
    },
  })}
>
  Button with sx styles
</Button>
`;

function Demo() {
  return (
    <Group position="center">
      <Button
        sx={(theme) => ({
          borderColor: theme.colors.blue[9],

          '&:hover': {
            backgroundColor: theme.colors.blue[9],
          },
        })}
      >
        Button with sx styles
      </Button>
    </Group>
  );
}

export const createStylesSx: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
