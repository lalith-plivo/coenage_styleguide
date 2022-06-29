import React from 'react';
import { Button, Text, Group } from '@cestyle/core';
import { useForceUpdate, randomId } from '@cestyle/hooks';

const code = `
import { Button, Text, Group } from '@cestyle/core';
import { useForceUpdate, randomId } from '@cestyle/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
