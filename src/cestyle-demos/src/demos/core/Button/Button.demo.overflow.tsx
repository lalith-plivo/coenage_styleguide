import React from 'react';
import { Button, Group } from '@cestyle/core';

const code = `
import { Button } from '@cestyle/core';

function Demo() {
  return (
    <>
      <div style={{ width: 200 }}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </div>

      <div style={{ width: 140 }}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </div>
    </>
  );
}
`;

function Demo() {
  return (
    <Group>
      <div style={{ width: 200 }}>
        <Button fullWidth variant="outline">
          Full width button
        </Button>
      </div>

      <div style={{ width: 140 }}>
        <Button fullWidth variant="outline">
          Button with overflow
        </Button>
      </div>
    </Group>
  );
}

export const overflow: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
