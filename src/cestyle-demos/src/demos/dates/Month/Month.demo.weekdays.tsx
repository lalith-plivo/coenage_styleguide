import React from 'react';
import { Group } from '@cestyle/core';
import { Month } from '@cestyle/dates';

const code = `
import { Month } from '@cestyle/dates';

function Demo() {
  return <Month hideWeekdays month={new Date()} />;
}
`;

function Demo() {
  return (
    <Group position="center">
      <Month month={new Date()} hideWeekdays />
    </Group>
  );
}

export const weekdays: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
