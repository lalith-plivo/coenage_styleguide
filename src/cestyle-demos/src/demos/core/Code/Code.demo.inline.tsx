import React from 'react';
import { Code } from '@cestyle/core';

const code = `
import { Code } from '@cestyle/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const inline: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
