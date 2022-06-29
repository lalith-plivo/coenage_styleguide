import React from 'react';
import { CeStyleProvider, Group, Button, CeStyleTheme } from '@cestyle/core';

function Wrapper({ primaryShade }: { primaryShade: CeStyleTheme['primaryShade'] }) {
  return (
    <CeStyleProvider inherit theme={{ primaryShade }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </CeStyleProvider>
  );
}

const codeTemplate = (props: string) => `
import { CeStyleProvider, Group, Button } from '@cestyle/core';

function Demo() {
  return (
    <CeStyleProvider theme={{ primaryShade: ${props
      .replace(' primaryShade={', '')
      .replace('}', '')} }}>
      <Group position="center">
        <Button variant="filled">Filled button</Button>
        <Button variant="light">Light button</Button>
        <Button variant="outline">Outline button</Button>
      </Group>
    </CeStyleProvider>
  );
}
`;

export const primaryShade: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper as any,
  codeTemplate,
  configurator: [{ name: 'primaryShade', type: 'number', initialValue: 6, min: 0, max: 9 }],
};
