import React from 'react';
import { useFullscreen } from '@cestyle/hooks';
import { Button, Group } from '@cestyle/core';

const code = `
import { useFullscreen } from '@cestyle/hooks';
import { Button } from '@cestyle/core';

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
      {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}
`;

function Demo() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Group position="center">
      <Button onClick={toggle} color={fullscreen ? 'red' : 'blue'}>
        {fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </Button>
    </Group>
  );
}

export const useFullscreenDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
