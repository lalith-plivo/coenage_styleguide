import React from 'react';
import { Wrapper } from './_wrapper';

const code = `
import { Spoiler } from '@cestyle/core';

function Demo() {
  return (
    <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
      {/* Content here */}
    </Spoiler>
  );
}
`;

function Demo() {
  return <Wrapper />;
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
