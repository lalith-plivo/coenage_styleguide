import React from 'react';
import { Badge, BadgeProps, Group } from '@cestyle/core';

function Wrapper(props: BadgeProps<'div'>) {
  return (
    <Group position="center">
      <Badge {...props}>Badge</Badge>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Badge } from '@cestyle/core';

function Demo() {
  return (
    <Badge${props}>Badge</Badge>
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'radius', type: 'size', initialValue: 'xl', defaultValue: 'xl' },
    {
      name: 'variant',
      type: 'select',
      initialValue: 'light',
      defaultValue: 'light',
      data: [
        { value: 'light', label: 'Light' },
        { value: 'filled', label: 'Filled' },
        { value: 'outline', label: 'Outline' },
        { value: 'dot', label: 'Dot' },
      ],
    },
  ],
};
