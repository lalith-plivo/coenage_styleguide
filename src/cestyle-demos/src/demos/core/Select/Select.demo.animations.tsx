import React from 'react';
import { Select } from '@cestyle/core';

const code = `
import { Select } from '@cestyle/core';

function Demo() {
  return (
    <Select
      transition="pop-top-left"
      transitionDuration={80}
      transitionTimingFunction="ease"
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        transition="pop-top-left"
        transitionDuration={80}
        transitionTimingFunction="ease"
      />
    </div>
  );
}

export const animations: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
