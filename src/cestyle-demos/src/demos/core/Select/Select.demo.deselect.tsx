import React from 'react';
import { Select } from '@cestyle/core';

const code = `
import { Select } from '@cestyle/core';

function Demo() {
  return <Select allowDeselect />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        allowDeselect
        defaultValue="react"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  );
}

export const deselect: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
