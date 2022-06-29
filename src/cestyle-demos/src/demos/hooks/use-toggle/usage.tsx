import React from 'react';
import { Button, Group } from '@cestyle/core';
import { useToggle, upperFirst } from '@cestyle/hooks';

const code = `
import { Button } from '@cestyle/core';
import { useToggle } from '@cestyle/hooks';

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle('blue', ['blue', 'orange']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
