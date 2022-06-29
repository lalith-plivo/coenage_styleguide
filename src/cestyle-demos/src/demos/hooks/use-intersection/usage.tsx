import React, { useRef } from 'react';
import { useIntersection } from '@cestyle/hooks';
import { Text, Paper, useCeStyleTheme } from '@cestyle/core';

const code = `
import { useRef } from 'react';
import { useIntersection } from '@cestyle/hooks';
import { Paper, Text, useCeStyleTheme } from '@cestyle/core';

function Demo() {
  const containerRef = useRef();
  const theme = useCeStyleTheme();
  const [ref, observedEntry] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div style={{ paddingTop: 260, paddingBottom: 280 }}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: observedEntry?.isIntersecting
              ? theme.colors.green[9]
              : theme.colors.red[9],
            minWidth: '50%',
          }}
        >
          <Text style={{ color: theme.white }} weight='bold'>
            {observedEntry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </div>
    </Paper>
  );
}
`;

function Demo() {
  const containerRef = useRef();
  const theme = useCeStyleTheme();
  const [ref, observedEntry] = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  return (
    <Paper ref={containerRef} style={{ overflowY: 'scroll', height: 300 }}>
      <div style={{ paddingTop: 260, paddingBottom: 280 }}>
        <Paper
          ref={ref}
          p="xl"
          style={{
            backgroundColor: observedEntry?.isIntersecting
              ? theme.colors.green[9]
              : theme.colors.red[9],
            minWidth: '50%',
          }}
        >
          <Text style={{ color: theme.white }} weight="bold">
            {observedEntry?.isIntersecting ? 'Fully visible' : 'Obscured'}
          </Text>
        </Paper>
      </div>
    </Paper>
  );
}

export const useIntersectionDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
