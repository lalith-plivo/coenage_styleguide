import React from 'react';
import { Group, Button, Badge, CeStyleProvider, useCeStyleColorScheme } from '@cestyle/core';

const code = `
import { Badge, Button, CeStyleProvider } from '@cestyle/core';

function Demo() {
  return (
    <CeStyleProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Button color="ocean-blue">Ocean blue button</Button>
      <Badge color="bright-pink" variant="filled">Bright pink badge</Badge>
    </CeStyleProvider>
  );
}
`;

function Demo() {
  const { colorScheme } = useCeStyleColorScheme();

  return (
    <CeStyleProvider
      theme={{
        colorScheme,
        colors: {
          'ocean-blue': [
            '#7AD1DD',
            '#5FCCDB',
            '#44CADC',
            '#2AC9DE',
            '#1AC2D9',
            '#11B7CD',
            '#09ADC3',
            '#0E99AC',
            '#128797',
            '#147885',
          ],
          'bright-pink': [
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
      }}
    >
      <Group position="center">
        <Button color="ocean-blue">Ocean blue button</Button>
        <Badge color="bright-pink" variant="filled" size="lg">
          Bright pink badge
        </Badge>
      </Group>
    </CeStyleProvider>
  );
}

export const themeColorsExtend: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
