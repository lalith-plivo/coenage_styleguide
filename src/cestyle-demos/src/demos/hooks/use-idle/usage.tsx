import React from 'react';
import { Group, Badge } from '@cestyle/core';
import { useIdle } from '@cestyle/hooks';

const code = `
import { Badge } from '@cestyle/core';
import { useIdle } from '@cestyle/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
