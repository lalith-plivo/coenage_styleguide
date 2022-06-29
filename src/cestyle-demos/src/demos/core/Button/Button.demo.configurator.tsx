import React from 'react';
import { Button, ButtonProps, Group } from '@cestyle/core';

function Wrapper(props: ButtonProps<'button'>) {
  return (
    <Group position="center">
      <Button {...props} />
    </Group>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Button } from '@cestyle/core';

function Demo() {
  return (
    <Button${props}>
      ${children}
    </Button>
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
      type: 'select',
      data: [
        { label: 'filled', value: 'filled' },
        { label: 'light', value: 'light' },
        { label: 'outline', value: 'outline' },
        { label: 'default', value: 'default' },
        { label: 'subtle', value: 'subtle' },
      ],
      initialValue: 'filled',
      defaultValue: 'filled',
    },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'compact', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'uppercase', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'children', type: 'string', initialValue: 'Settings' },
  ],
};
