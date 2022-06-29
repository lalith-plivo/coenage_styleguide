import React from 'react';
import { Chips, Chip, ChipsProps } from '@cestyle/core';

function Wrapper(props: ChipsProps) {
  return (
    <Chips {...props} position="center" defaultValue="react">
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
}

const codeTemplate = (props: string) => `
import { Chips, Chip } from '@cestyle/core';

function Demo() {
  return (
    <Chips${props}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'variant',
      type: 'segmented',
      data: [
        { value: 'outline', label: 'Outline' },
        { value: 'filled', label: 'Filled' },
      ],
      initialValue: 'outline',
      defaultValue: 'outline',
    },
    { name: 'spacing', type: 'size', initialValue: 'xs', defaultValue: 'xs' },
    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
  ],
};
