import React from 'react';
import { Text, Code } from '@cestyle/core';
import { useMouse } from '@cestyle/hooks';

const code = `
import { Text, Code } from '@cestyle/core';
import { useMouse } from '@cestyle/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
