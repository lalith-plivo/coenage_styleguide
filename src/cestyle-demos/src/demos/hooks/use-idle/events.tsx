import React from 'react';
import { Group, Badge } from '@cestyle/core';
import { useIdle } from '@cestyle/hooks';

const eventsCode = `
import { Badge } from '@cestyle/core';
import { useIdle } from '@cestyle/hooks';

function Demo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function EventsDemo() {
  const idle = useIdle(2000, { events: ['click', 'touchstart'] });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleEvents: CeStyleDemo = {
  type: 'demo',
  code: eventsCode,
  component: EventsDemo,
};
