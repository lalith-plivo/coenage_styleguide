import React from 'react';
import { Group, ActionIcon, useCeStyleColorScheme } from '@cestyle/core';
import { Sun, MoonStars } from 'tabler-icons-react';

const code = `
import { ActionIcon, useCeStyleColorScheme } from '@cestyle/core';
import { Sun, MoonStars } from 'tabler-icons-react';

function Demo() {
  const { colorScheme, toggleColorScheme } = useCeStyleColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <Sun size={18} /> : <MoonStars size={18} />}
    </ActionIcon>
  );
}
`;

function Demo() {
  const { colorScheme, toggleColorScheme } = useCeStyleColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Group position="center">
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <Sun size={18} /> : <MoonStars size={18} />}
      </ActionIcon>
    </Group>
  );
}

export const darkThemeToggle: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
