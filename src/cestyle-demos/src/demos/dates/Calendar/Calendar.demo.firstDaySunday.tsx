import React from 'react';
import { Group } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

const code = `
import { Calendar } from '@cestyle/dates';

function Demo() {
  return <Calendar firstDayOfWeek="sunday" />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar firstDayOfWeek="sunday" />
    </Group>
  );
}

export const firstDaySunday: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
