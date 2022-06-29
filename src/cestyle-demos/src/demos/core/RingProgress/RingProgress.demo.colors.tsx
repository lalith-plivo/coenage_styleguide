import React from 'react';
import { RingProgress, Group } from '@cestyle/core';

const code = `
import { RingProgress } from '@cestyle/core';

function Demo() {
  return (
    <RingProgress
      sections={[
        { value: 40, color: '#68b5e8' },
        { value: 15, color: '#6888e8' },
        { value: 15, color: '#8468e8' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        sections={[
          { value: 40, color: '#68b5e8' },
          { value: 15, color: '#6888e8' },
          { value: 15, color: '#8468e8' },
        ]}
      />
    </Group>
  );
}

export const colors: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
