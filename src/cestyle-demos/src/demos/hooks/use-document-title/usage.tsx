import React, { useState } from 'react';
import { useDocumentTitle, randomId } from '@cestyle/hooks';
import { Group, Button } from '@cestyle/core';

const code = `
import { useState } from 'react';
import { useDocumentTitle, randomId } from '@cestyle/hooks';
import { Button } from '@cestyle/core';

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Button onClick={() => setTitle(randomId())}>
      Set document title to random id
    </Button>
  );
}`;

function Demo() {
  const [title, setTitle] = useState('');
  useDocumentTitle(title);

  return (
    <Group position="center">
      <Button onClick={() => setTitle(randomId())}>Set document title to random id</Button>
    </Group>
  );
}

export const useDocumentTitleDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
