import React from 'react';
import { Group, Button, CeStyleProvider, useCeStyleTheme } from '@cestyle/core';

const code = `
import { Button, CeStyleProvider } from '@cestyle/core';

function Demo() {
  return (
    <CeStyleProvider theme={{
      colors: {
        brand: ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82','#AD1374' ],
      },
      primaryColor: 'brand',
    }}
    >
      <Button>Primary button</Button>
      <Button color="blue">Blue button</Button>
    </CeStyleProvider>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <CeStyleProvider
      theme={{
        colors: {
          brand: [
            '#F0BBDD',
            '#ED9BCF',
            '#EC7CC3',
            '#ED5DB8',
            '#F13EAF',
            '#F71FA7',
            '#FF00A1',
            '#E00890',
            '#C50E82',
            '#AD1374',
          ],
        },
        primaryColor: 'brand',
        colorScheme: theme.colorScheme,
      }}
    >
      <Group position="center">
        <Button>Primary button</Button>
        <Button color="blue">Blue button</Button>
      </Group>
    </CeStyleProvider>
  );
}

export const primaryColor: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
