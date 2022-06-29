import React from 'react';
import { useScrollIntoView } from '@cestyle/hooks';
import { Button, Text, Group, useCeStyleTheme, Paper } from '@cestyle/core';

const code = `
import { useScrollIntoView } from '@cestyle/hooks';
import { Button, Paper } from '@cestyle/core';

function Demo() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView({
    axis: 'x',
  });

  return (
    <>
      <Paper ref={scrollableRef} style={{ overflowX: 'scroll', height: 150, width: 300 }}>
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
  >({
    axis: 'x',
  });

  return (
    <Group position="center">
      <Paper ref={scrollableRef} style={{ overflowX: 'scroll', height: 150, width: 300 }}>
        <div style={{ paddingLeft: 260, paddingRight: 450 }}>
          <Paper
            ref={targetRef}
            p="md"
            style={{
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
              width: 'max-content',
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

export const useScrollIntoViewAxis: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
