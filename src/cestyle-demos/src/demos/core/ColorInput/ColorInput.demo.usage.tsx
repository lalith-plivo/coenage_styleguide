import React from 'react';
import { ColorInput } from '@cestyle/core';

const code = `
import { ColorInput } from '@cestyle/core';

function Demo() {
  return <ColorInput placeholder="Pick color" label="Your favorite color" />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput placeholder="Pick color" label="Your favorite color" defaultValue="#ffffff" />
    </div>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
