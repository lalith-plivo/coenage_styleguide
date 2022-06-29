import React from 'react';
import { useCeStyleTheme, Group, Text, Code } from '@cestyle/core';
import { useMouse } from '@cestyle/hooks';

const code = `
import { useCeStyleTheme, Text, Code, Group } from '@cestyle/core';
import { useMouse } from '@cestyle/hooks';

function Demo() {
  const theme = useCeStyleTheme();
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 300,
            height: 180,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        />
      </Group>
      <Text align="center">
        Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();
  const { ref, x, y } = useMouse();

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: 300,
            height: 180,
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }}
        />
      </Group>
      <Text align="center" style={{ marginTop: theme.spacing.sm }}>
        Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
      </Text>
    </>
  );
}

export const useMouseRef: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
