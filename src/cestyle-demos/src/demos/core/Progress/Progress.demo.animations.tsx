import React from 'react';
import { Progress } from '@cestyle/core';

const code = `
import { Progress } from '@cestyle/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;

function Label() {
  return <Progress value={75} animate />;
}

export const animations: CeStyleDemo = {
  type: 'demo',
  code,
  component: Label,
};
