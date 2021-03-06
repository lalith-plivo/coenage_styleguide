import React from 'react';
import { TimeInput } from '@cestyle/dates';

const codeTemplate = (props: string) => `
import { TimeInput } from '@cestyle/dates';

function Demo() {
  return (
    <TimeInput
      defaultValue={new Date()}
     ${props}
    />
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: (props) => <TimeInput defaultValue={new Date()} {...props} />,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Pick time',
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

    { name: 'size', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
    {
      name: 'format',
      type: 'select',
      data: [
        { label: '24', value: '24' },
        { label: '12', value: '12' },
      ],
      initialValue: '24',
      defaultValue: '24',
    },
    {
      name: 'amLabel',
      type: 'string',
      initialValue: 'am',
    },
    {
      name: 'pmLabel',
      type: 'string',
      initialValue: 'pm',
    },
    {
      name: 'withSeconds',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
    {
      name: 'clearable',
      type: 'boolean',
      initialValue: false,
      defaultValue: false,
    },
  ],
};
