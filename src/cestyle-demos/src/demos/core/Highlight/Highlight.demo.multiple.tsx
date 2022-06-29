import React from 'react';
import { Highlight } from '@cestyle/core';

const code = `
import { Highlight } from '@cestyle/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
