import React from 'react';
import { Group } from '@cestyle/core';
import { DemoBase } from './_base';

const code = `
import { Burger } from '@cestyle/core';

function Demo() {
  return (
    <>
      <Burger />
      <Burger color="#fe6734" />
      <Burger color="#45f50d" />
    </>
  );
}
`;

export function Demo() {
  return (
    <Group position="center">
      <DemoBase />
      <DemoBase color="#fe6734" />
      <DemoBase color="#45f50d" />
    </Group>
  );
}

export const color: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
