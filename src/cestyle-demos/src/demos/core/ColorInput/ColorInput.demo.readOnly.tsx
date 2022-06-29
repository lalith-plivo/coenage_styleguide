import React from 'react';
import { ColorInput } from '@cestyle/core';

const code = `
import { ColorInput } from '@cestyle/core';

function Demo() {
  return <ColorInput disallowInput />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <ColorInput disallowInput placeholder="Pick color" label="Your favorite color" />
    </div>
  );
}

export const readOnly: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
