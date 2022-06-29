import React from 'react';
import { Autocomplete } from '@cestyle/core';

const codeTemplate = (props: string) => `
import { Autocomplete } from '@cestyle/core';

function Demo() {
  return (
    <Autocomplete
     ${props}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: (props: any) => (
    <Autocomplete data={['React', 'Angular', 'Svelte', 'Vue']} {...props} />
  ),
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Pick one' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Your favorite framework/library',
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
  ],
};
