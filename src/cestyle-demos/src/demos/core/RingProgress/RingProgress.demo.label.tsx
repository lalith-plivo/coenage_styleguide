import React from 'react';
import { Check } from 'tabler-icons-react';
import { ThemeIcon, RingProgress, Group, Text, Center } from '@cestyle/core';

const code = `
import { ThemeIcon, RingProgress, Text, Center } from '@cestyle/core';
import { Check } from 'tabler-icons-react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight='bold' align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <Check size={22} />
            </ThemeIcon>
          </Center>
        }
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight="bold" align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <Check size={22} />
            </ThemeIcon>
          </Center>
        }
      />
    </Group>
  );
}

export const label: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
