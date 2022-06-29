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
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}

export const labels: CeStyleDemo = {
  type: 'demo',
  component: Label,
  code,
};
