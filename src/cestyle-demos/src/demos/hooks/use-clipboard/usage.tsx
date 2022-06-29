import React from 'react';
import { Group, Button } from '@cestyle/core';
import { useClipboard } from '@cestyle/hooks';

const code = `
import { Button } from '@cestyle/core';
import { useClipboard } from '@cestyle/hooks';

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Button
      color={clipboard.copied ? 'teal' : 'blue'}
      onClick={() => clipboard.copy('Hello, world!')}
    >
      {clipboard.copied ? 'Copied' : 'Copy'}
    </Button>
  );
}`;

function Demo() {
  const clipboard = useClipboard({ timeout: 500 });

  return (
    <Group position="center">
      <Button
        color={clipboard.copied ? 'teal' : 'blue'}
        onClick={() => clipboard.copy('Hello, world!')}
      >
        {clipboard.copied ? 'Copied' : 'Copy'}
      </Button>
    </Group>
  );
}

export const useClipboardDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
