import React from 'react';
import { TimeInput } from '@cestyle/dates';

const code = `
import { TimeInput } from '@cestyle/dates';

function Demo() {
  return <TimeInput clearable defaultValue={new Date()} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="With a clear button" clearable defaultValue={new Date()} />
    </div>
  );
}

export const clearable: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
