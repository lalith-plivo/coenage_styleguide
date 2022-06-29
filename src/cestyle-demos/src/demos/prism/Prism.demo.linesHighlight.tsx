import React from 'react';
import { Prism } from '@cestyle/prism';

const demoCode = `
import { Button } from '@cestyle/core';

function Demo() {
  return <Button>Hello</Button>
}

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;

const code = `
import { Prism } from '@cestyle/prism';

const deleted = { color: 'red', label: '-' };
const added = { color: 'green', label: '+' };

function Demo() {
  return (
    <Prism
      language="tsx"
      withLineNumbers
      highlightLines={{
        3: deleted,
        4: deleted,
        5: deleted,
        7: added,
        8: added,
        9: added,
      }}
    >
      {/* ...code */}
    </Prism>
  );
}
`;

function Demo() {
  const deleted = { color: 'red', label: '-' };
  const added = { color: 'green', label: '+' };

  return (
    <Prism
      language="tsx"
      withLineNumbers
      highlightLines={{
        3: deleted,
        4: deleted,
        5: deleted,
        7: added,
        8: added,
        9: added,
      }}
    >
      {demoCode}
    </Prism>
  );
}

export const linesHighlight: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
