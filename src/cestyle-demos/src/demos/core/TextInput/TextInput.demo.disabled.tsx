import React from 'react';
import { TextInput } from '@cestyle/core';

const code = `
import { TextInput } from '@cestyle/core';

function Demo() {
  return <TextInput disabled />
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <TextInput label="Disabled without value" placeholder="Your email" disabled />

      <TextInput
        style={{ marginTop: 15 }}
        label="Disabled with value"
        placeholder="Your email"
        disabled
        value="myemail@gmail.com"
      />
    </div>
  );
}

export const disabled: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
