import React from 'react';
import { useCeStyleTheme, Button, Box, Overlay } from '@cestyle/core';

const code = `
import { Overlay, Button, Box, useCeStyleTheme } from '@cestyle/core';

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>Under overlay</Button>
      <Overlay
        gradient={\`linear-gradient(105deg, \${theme.black} 20%, #312f2f 50%, \${theme.colors.gray[4]} 100%)\`}
      />
    </Box>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: 200,
        width: '100%',
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button>Under overlay</Button>
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
      />
    </Box>
  );
}

export const gradient: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
