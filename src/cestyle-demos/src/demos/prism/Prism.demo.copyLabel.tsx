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
  return (
    <>
      <Prism noCopy language="tsx">{/* ...code */}</Prism>

      <Prism
        language="tsx"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
      >
        {/* ...code */}
      </Prism>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Prism language="tsx" noCopy>
        {demoCode}
      </Prism>

      <Prism
        language="tsx"
        copyLabel="Copy code to clipboard"
        copiedLabel="Code copied to clipboard"
        style={{ marginTop: 20 }}
      >
        {demoCode}
      </Prism>
    </>
  );
}

export const copyLabel: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
