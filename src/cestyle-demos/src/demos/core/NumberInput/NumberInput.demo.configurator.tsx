import React from 'react';
import { NumberInput, NumberInputProps } from '@cestyle/core';

const codeTemplate = (props: string) => `
import { NumberInput } from '@cestyle/core';

function Demo() {
  return (
    <NumberInput
      defaultValue={18}
     ${props}
    />
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: (props: NumberInputProps) => <NumberInput {...props} defaultValue={18} />,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Your age' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Your age',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'default', value: 'default' },
        { label: 'filled', value: 'filled' },
        { label: 'unstyled', value: 'unstyled' },
      ],
      initialValue: 'default',
      defaultValue: 'default',
    },

    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
    {
      name: 'hideControls',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
  ],
};
