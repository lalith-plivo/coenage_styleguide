import React from 'react';
import { Highlight } from '@cestyle/core';

const code = `
import { Highlight } from '@cestyle/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://cestyle.dev"
      target="_blank"
      highlight="cestyle"
      variant="link"
      weight="semibold"
    >
      CeStyle website
    </Highlight>
  );
}
`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://cestyle.dev"
      target="_blank"
      highlight="cestyle"
      variant="link"
      weight="semibold"
    >
      CeStyle website
    </Highlight>
  );
}

export const props: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
