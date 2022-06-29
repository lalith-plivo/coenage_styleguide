import React from 'react';
import { DEFAULT_THEME, Group, ColorPicker } from '@cestyle/core';

const code = `
import { ColorPicker } from '@cestyle/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(DEFAULT_THEME.colors)
        .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
        .join(', ')}]}
    />
  );
}
`;

function Demo() {
  return (
    <Group position="center" direction="column">
      <ColorPicker
        format="hex"
        defaultValue="rgba(50, 151, 194, 1)"
        swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      />
    </Group>
  );
}

export const swatches: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
