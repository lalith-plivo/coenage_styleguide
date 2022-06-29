import React from 'react';
import { Divider } from '@cestyle/core';

const code = `
import { Divider } from '@cestyle/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
