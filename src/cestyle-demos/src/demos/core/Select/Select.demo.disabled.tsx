import React from 'react';
import { Select } from '@cestyle/core';

const code = `
import { Select } from '@cestyle/core';

function Demo() {
  return <Select disabled />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled without value"
        placeholder="Pick all that you like"
        disabled
      />

      <Select
        style={{ marginTop: 15 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled with value"
        placeholder="Pick all that you like"
        disabled
        value="React"
      />
    </div>
  );
}

export const disabled: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
