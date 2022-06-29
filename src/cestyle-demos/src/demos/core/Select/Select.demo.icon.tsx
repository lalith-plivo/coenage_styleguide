import React from 'react';
import { Hash } from 'tabler-icons-react';
import { Select } from '@cestyle/core';

const code = `
import { Select } from '@cestyle/core';
import { Hash } from 'tabler-icons-react';

function Demo() {
  return (
    <Select
      label="Pick a hashtag"
      placeholder="Pick a hashtag"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      icon={<Hash size={14} />}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Pick a hashtag"
        placeholder="Pick a hashtag"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        icon={<Hash size={14} />}
      />
    </div>
  );
}

export const icon: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
