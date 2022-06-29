import React from 'react';
import { useScrollIntoView } from '@cestyle/hooks';
import { Button, Text, Group, useCeStyleTheme, Paper } from '@cestyle/core';

const code = `
import { useScrollIntoView } from '@cestyle/hooks';
import { Button, Paper } from '@cestyle/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView();

  return (
    <>
      <Paper ref={scrollableRef} style={{ overflowY: 'scroll', height: 300, flex: 1 }}>
        <Paper ref={targetRef}>Scroll me into view</Paper>
      </Paper>

      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();

  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >();

  return (
    <Group position="center">
      <Paper ref={scrollableRef} style={{ overflowY: 'scroll', height: 300, flex: 1 }}>
        <div style={{ paddingTop: 260, paddingBottom: 450 }}>
          <Paper
            ref={targetRef}
            p="xl"
            style={{
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: '100%',
            }}
          >
            <Text>Scroll me into view</Text>
          </Paper>
        </div>
      </Paper>
      <Button onClick={() => scrollIntoView()}>Scroll to target</Button>
    </Group>
  );
}

export const useScrollIntoViewParent: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
