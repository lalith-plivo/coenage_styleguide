import React from 'react';
import { Group, Button, Text, CeStyleProvider, useCeStyleColorScheme } from '@cestyle/core';

const code = `import { Button, CeStyleProvider, Text } from '@cestyle/core';

function Demo() {
  return (
    <CeStyleProvider theme={{ fontFamily: 'Georgia, serif' }}>
      <Text align="center" mb="xs">Georgia or serif text</Text>

      <CeStyleProvider theme={{ fontFamily: 'Greycliff CF, sans-serif' }}>
        <Button>Greycliff CF button</Button>
      </CeStyleProvider>
    </CeStyleProvider>
  );
}`;

function Demo() {
  const { colorScheme } = useCeStyleColorScheme();

  return (
    <CeStyleProvider theme={{ fontFamily: 'Georgia, serif', colorScheme }}>
      <Text align="center" mb="xs">
        Georgia or serif text
      </Text>

      <CeStyleProvider theme={{ fontFamily: 'Greycliff CF, sans-serif', colorScheme }}>
        <Group position="center">
          <Button>Greycliff CF button</Button>
        </Group>
      </CeStyleProvider>
    </CeStyleProvider>
  );
}

export const nestedProviders: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
