import React from 'react';
import { Progress } from '@cestyle/core';

const code = `
import { Progress } from '@cestyle/core';

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}

export const sections: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
