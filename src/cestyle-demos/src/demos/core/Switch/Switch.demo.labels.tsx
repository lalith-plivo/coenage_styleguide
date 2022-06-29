import React from 'react';
import { Switch, Group } from '@cestyle/core';

const code = `
import { Switch } from '@cestyle/core';

function Demo() {
  return <Switch onLabel="ON" offLabel="OFF" />;
}
`;

function Label() {
  return (
    <Group position="center">
      <Switch onLabel="ON" offLabel="OFF" />
    </Group>
  );
}

export const labels: CeStyleDemo = {
  type: 'demo',
  component: Label,
  code,
};
