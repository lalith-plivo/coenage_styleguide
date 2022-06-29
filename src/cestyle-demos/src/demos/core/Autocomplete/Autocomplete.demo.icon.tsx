import React from 'react';
import { Hash } from 'tabler-icons-react';
import { Autocomplete } from '@cestyle/core';

const code = `
import { Autocomplete } from '@cestyle/core';
import { Hash } from 'tabler-icons-react';

function Demo() {
  return <Autocomplete icon={<Hash />} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Autocomplete
        label="Enter a hashtag"
        placeholder="Enter a hashtag"
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
