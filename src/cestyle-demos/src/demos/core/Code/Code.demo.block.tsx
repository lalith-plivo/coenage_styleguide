import React from 'react';
import { Code } from '@cestyle/core';

const code = `
import { Code } from '@cestyle/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@cestyle/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@cestyle/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
