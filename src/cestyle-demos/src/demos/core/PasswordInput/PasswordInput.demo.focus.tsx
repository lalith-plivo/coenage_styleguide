import React from 'react';
import { PasswordInput } from '@cestyle/core';

const code = `
import { PasswordInput } from '@cestyle/core';

function Demo() {
  return (
    <>
      <PasswordInput
        label="Toggle button is not focusable"
        placeholder="Toggle button is not focusable"
      />

      <PasswordInput
        label="Toggle button is focusable"
        placeholder="Toggle button is focusable"
        toggleTabIndex={0}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 360, margin: 'auto' }}>
      <PasswordInput
        label="Toggle button is not focusable"
        placeholder="Toggle button is not focusable"
        toggleTabIndex={-1}
      />

      <PasswordInput
        label="Toggle button is focusable"
        placeholder="Toggle button is focusable"
        toggleTabIndex={0}
        style={{ marginTop: 15 }}
      />
    </div>
  );
}

export const focus: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
