import React from 'react';
import { TimeInput } from '@cestyle/dates';

const code = `
import { TimeInput } from '@cestyle/dates';

function Demo() {
  return <TimeInput label="Pick time" format="12" defaultValue={new Date()} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Pick time" format="12" defaultValue={new Date()} />
    </div>
  );
}

export const format: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
