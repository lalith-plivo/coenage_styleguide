import React from 'react';
import { MultiSelect } from '@cestyle/core';
import { data } from './_data';

const code = `
import { MultiSelect } from '@cestyle/core';

function Demo() {
  return (
    <MultiSelect
      data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
      label="Your favorite frameworks/libraries"
      placeholder="Pick all that you like"
      defaultValue={['react', 'next']}
      clearButtonLabel="Clear selection"
      clearable
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
        defaultValue={['react', 'next']}
        clearButtonLabel="Clear selection"
        clearable
      />
    </div>
  );
}

export const clearable: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
