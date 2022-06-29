import React from 'react';
import { Anchor } from '@cestyle/core';

const code = `
import { Anchor } from '@cestyle/core';

function Demo() {
  return (
    <Anchor href="https://cestyle.dev/" target="_blank">
      CeStyle docs
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://cestyle.dev/" target="_blank">
      CeStyle docs
    </Anchor>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
