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
  return <Prism colorScheme="dark" language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" colorScheme="dark">
      {demoCode}
    </Prism>
  );
}

export const themeOverride: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
