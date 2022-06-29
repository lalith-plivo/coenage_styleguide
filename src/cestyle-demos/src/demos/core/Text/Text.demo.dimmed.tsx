import React from 'react';
import { Text } from '@cestyle/core';

const code = `
import { Text } from '@cestyle/core';

function Demo() {
  return <Text color="dimmed">Dimmed text</Text>;
}
`;

function Demo() {
  return <Text color="dimmed">Dimmed text</Text>;
}

export const dimmed: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
