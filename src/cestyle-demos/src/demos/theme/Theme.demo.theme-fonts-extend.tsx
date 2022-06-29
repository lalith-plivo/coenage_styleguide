import React from 'react';
import { Group, Button, Code, Title, CeStyleProvider, useCeStyleColorScheme } from '@cestyle/core';

const code = `
import { Button, Code, Title, CeStyleProvider } from '@cestyle/core';

function Demo() {
  return (
    <CeStyleProvider
      theme={{
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Greycliff CF, sans-serif' },
      }}
    >
      <Title order={3}>Inter or sans-serif title</Title>
      <Button>Verdana button</Button>
      <Code>Monaco, Courier Code</Code>
    </CeStyleProvider>
  );
}
`;

function Demo() {
  const { colorScheme } = useCeStyleColorScheme();

  return (
    <CeStyleProvider
      theme={{
        colorScheme,
        fontFamily: 'Verdana, sans-serif',
        fontFamilyMonospace: 'Monaco, Courier, monospace',
        headings: { fontFamily: 'Inter, sans-serif' },
      }}
    >
      <Title style={{ textAlign: 'center', marginBottom: 10 }} order={3}>
        Inter or sans-serif title
      </Title>

      <Group position="center">
        <Button>Verdana button</Button>
        <Code>Monaco, Courier Code</Code>
      </Group>
    </CeStyleProvider>
  );
}

export const themeFontsExtend: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
