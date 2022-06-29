import React from 'react';
import { Group, Badge } from '@cestyle/core';
import { useMediaQuery } from '@cestyle/hooks';

const code = `
import { Badge } from '@cestyle/core';
import { useMediaQuery } from '@cestyle/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <Group position="center">
      <Badge color={matches ? 'teal' : 'red'} variant="filled">
        Breakpoint {matches ? 'matches' : 'does not match'}
      </Badge>
    </Group>
  );
}

export const useMediaQueryDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
