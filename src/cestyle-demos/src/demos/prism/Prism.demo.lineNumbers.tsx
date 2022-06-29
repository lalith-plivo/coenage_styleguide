import React from 'react';
import { Prism } from '@cestyle/prism';

const demoCode = `
import { Button } from '@cestyle/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@cestyle/prism';

function Demo() {
  return <Prism withLineNumbers language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode}
    </Prism>
  );
}

export const lineNumbers: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
