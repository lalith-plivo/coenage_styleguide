import React from 'react';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';
import { Center, useCeStyleTheme, Anchor, Box } from '@cestyle/core';

const code = `
import { Center, Anchor, Box } from '@cestyle/core';
import { ArrowLeft } from 'tabler-icons-react';

function Demo() {
  return (
    <Anchor href="https://cestyle.dev" target="_blank">
      <Center inline>
        <ArrowLeft size={14} />
        <Box ml={5}>Back to CeStyle website</Box>
      </Center>
    </Anchor>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();
  return (
    <Anchor href="https://cestyle.dev" target="_blank">
      <Center inline>
        {theme.dir === 'ltr' ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        <Box ml={5}>Back to CeStyle website</Box>
      </Center>
    </Anchor>
  );
}

export const inline: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
