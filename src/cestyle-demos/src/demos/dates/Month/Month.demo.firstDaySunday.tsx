import React from 'react';
import { Group } from '@cestyle/core';
import { Month } from '@cestyle/dates';

const code = `
import { Month } from '@cestyle/dates';

function Demo() {
  return <Month month={new Date()} firstDayOfWeek="sunday" />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} firstDayOfWeek="sunday" />
    </Group>
  );
}

export const firstDaySunday: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
