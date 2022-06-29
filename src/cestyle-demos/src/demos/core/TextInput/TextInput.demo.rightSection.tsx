import React from 'react';
import { TextInput, Loader } from '@cestyle/core';

const code = `
import { TextInput, Loader } from '@cestyle/core';

function Demo() {
  return <TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Your email" placeholder="Your email" rightSection={<Loader size="xs" />} />
    </div>
  );
}

export const rightSection: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
