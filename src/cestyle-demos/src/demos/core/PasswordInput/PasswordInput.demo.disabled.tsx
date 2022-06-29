import React from 'react';
import { PasswordInput } from '@cestyle/core';

const code = `
import { PasswordInput } from '@cestyle/core';

function Demo() {
  return <PasswordInput disabled />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 320, marginLeft: 'auto', marginRight: 'auto' }}>
      <PasswordInput label="Disabled without value" placeholder="Your password" disabled />

      <PasswordInput
        mt="md"
        label="Disabled with value"
        placeholder="Your password"
        disabled
        value="secret"
      />
    </div>
  );
}

export const disabled: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
