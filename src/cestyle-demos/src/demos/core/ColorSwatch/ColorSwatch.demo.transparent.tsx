import React from 'react';
import { useCeStyleTheme, ColorSwatch, Group } from '@cestyle/core';

const code = `
import { ColorSwatch, Group, useCeStyleTheme } from '@cestyle/core';

function Demo() {
  const theme = useCeStyleTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();
  const swatches = Object.keys(theme.colors).map((color) => (
    <ColorSwatch key={color} color={theme.fn.rgba(theme.colors[color][6], 0.5)} />
  ));

  return (
    <Group position="center" spacing="xs">
      {swatches}
    </Group>
  );
}

export const transparent: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
