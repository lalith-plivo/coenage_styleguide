import React from 'react';
import { Center, useCeStyleTheme } from '@cestyle/core';

const code = `
import { Center } from '@cestyle/core';

function Demo() {
  return (
    <Center style={{ width: 400, height: 200 }}>
      <div>All elements inside Center are centered</div>
    </Center>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();
  return (
    <Center
      style={{
        margin: 'auto',
        maxWidth: 400,
        height: 100,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[0],
      }}
    >
      <div
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[1],
        }}
      >
        All elements inside Center are centered
      </div>
    </Center>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
