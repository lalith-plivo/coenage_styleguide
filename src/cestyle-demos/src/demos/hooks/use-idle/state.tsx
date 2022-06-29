import React from 'react';
import { Group, Badge } from '@cestyle/core';
import { useIdle } from '@cestyle/hooks';

const initialStateCode = `
import { Badge } from '@cestyle/core';
import { useIdle } from '@cestyle/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function InitialStateDemo() {
  const idle = useIdle(2000, { initialState: false });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleInitialState: CeStyleDemo = {
  type: 'demo',
  code: initialStateCode,
  component: InitialStateDemo,
};
