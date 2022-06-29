import React from 'react';
import { Mark, Text } from '@cestyle/core';

const code = `
import { Mark, Text } from '@cestyle/core';

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>CeStyle</Mark>, you are awesome!
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>CeStyle</Mark>, you are awesome!
    </Text>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
