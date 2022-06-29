import React from 'react';
import { Prism } from '@cestyle/prism';

export const demoCode = `
import { Button } from '@cestyle/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@cestyle/prism';

const demoCode = \`import { Button } from '@cestyle/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export const usage: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
