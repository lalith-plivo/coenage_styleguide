import React from 'react';
import { useScrollIntoView } from '@cestyle/hooks';
import { Button, Text, Group, useCeStyleTheme } from '@cestyle/core';

const code = `
import { useScrollIntoView } from '@cestyle/hooks';
import { Button, Text } from '@cestyle/core';

function Demo() {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({ offset: 60 });

  return (
    <>
      <Button onClick={() => scrollIntoView({ alignment: 'center' })}>Scroll to target</Button>
      <div style={{ height: '50vh' }} />
      <Text ref={targetRef}>Hello there</Text>
    </>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();

  const navbarHeight = 60;
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: navbarHeight,
  });

  return (
    <Group position="center">
      <Button
        onClick={() =>
          scrollIntoView({
            alignment: 'center',
          })
        }
      >
        Scroll to target
      </Button>
      <div
        style={{
          width: '100%',
          height: '50vh',
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
        }}
      />
      <Text ref={targetRef}>Hello there</Text>
    </Group>
  );
}

export const useScrollIntoViewUsage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
