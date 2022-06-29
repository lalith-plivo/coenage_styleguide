import React from 'react';
import { Group } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

const code = `
import { Calendar } from '@cestyle/dates';

function Demo() {
  return <Calendar allowLevelChange={false} />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar value={null} allowLevelChange={false} />
    </Group>
  );
}

export const noLevel: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
