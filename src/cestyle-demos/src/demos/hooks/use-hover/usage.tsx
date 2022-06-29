import React from 'react';
import { useHover } from '@cestyle/hooks';
import { useCeStyleTheme, Text } from '@cestyle/core';

const code = `
import { useHover } from '@cestyle/hooks';

function Demo() {
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'I am hovered' : 'Put mouse over me please'}
    </div>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();
  const { hovered, ref } = useHover();
  return (
    <div
      ref={ref}
      style={{
        height: 60,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{hovered ? 'I am hovered' : 'Put mouse over me please'}</Text>
    </div>
  );
}

export const useHoverDemo: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
