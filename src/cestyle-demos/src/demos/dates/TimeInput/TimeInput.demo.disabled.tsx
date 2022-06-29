import React from 'react';
import { TimeInput } from '@cestyle/dates';

const code = `
import { TimeInput } from '@cestyle/dates';

function Demo() {
  return <TimeInput disabled />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TimeInput label="Disabled without value" disabled />
      <TimeInput label="Disabled with value" disabled defaultValue={new Date()} mt="md" />
    </div>
  );
}

export const disabled: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
