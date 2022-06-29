import React, { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { useCeStyleTheme, ColorSwatch, Group } from '@cestyle/core';

const code = `
import { useState } from 'react';
import { CheckIcon } from '@modulz/radix-icons';
import { ColorSwatch, Group, useCeStyleTheme } from '@cestyle/core';

function Demo() {
  const theme = useCeStyleTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://cestyle.dev" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();
  const [checked, setChecked] = useState(true);

  return (
    <Group position="center" spacing="xs">
      <ColorSwatch component="a" href="https://cestyle.dev" color={theme.colors.blue[6]} />
      <ColorSwatch
        component="button"
        color={theme.colors.grape[6]}
        onClick={() => setChecked((c) => !c)}
        style={{ color: '#fff', cursor: 'pointer' }}
      >
        {checked && <CheckIcon />}
      </ColorSwatch>
    </Group>
  );
}

export const component: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
