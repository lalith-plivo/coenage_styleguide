import React from 'react';
import { Input } from '@cestyle/core';

const code = `
import { Input } from '@cestyle/core';

function Demo() {
  return (
    <>
      <Input variant="default" placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="unstyled" placeholder="Unstyled variant" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Input variant="default" placeholder="Default variant" />
      <Input style={{ marginTop: 15 }} variant="filled" placeholder="Filled variant" />
      <Input style={{ marginTop: 15 }} variant="unstyled" placeholder="Unstyled variant" />
    </>
  );
}

export const variants: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
