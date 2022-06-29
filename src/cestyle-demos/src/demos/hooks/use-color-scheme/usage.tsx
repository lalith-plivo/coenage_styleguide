import React from 'react';
import { Group, Badge } from '@cestyle/core';
import { useColorScheme } from '@cestyle/hooks';

const code = `
import { Badge } from '@cestyle/core';
import { useColorScheme } from '@cestyle/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

export const useColorSchemeDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
