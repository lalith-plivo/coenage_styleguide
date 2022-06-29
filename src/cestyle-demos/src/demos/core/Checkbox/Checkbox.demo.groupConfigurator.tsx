import React from 'react';
import { CheckboxGroup, CheckboxGroupProps, Checkbox } from '@cestyle/core';

const codeTemplate = (props: string) => `
import { CheckboxGroup, Checkbox } from '@cestyle/core';

function Demo() {
  return (
    <CheckboxGroup
      defaultValue={['react']}
     ${props}
    >
      <Checkbox value="react" label="React" />
      <Checkbox value="svelte" label="Svelte" />
      <Checkbox value="ng" label="Angular" />
      <Checkbox value="vue" label="Vue" />
    </CheckboxGroup>
  );
}
`;

function Wrapper(props: CheckboxGroupProps) {
  return (
    <CheckboxGroup defaultValue={['react']} {...props}>
      <Checkbox value="react" label="React" />
      <Checkbox value="svelte" label="Svelte" />
      <Checkbox value="ng" label="Angular" />
      <Checkbox value="vue" label="Vue" />
    </CheckboxGroup>
  );
}

export const groupConfigurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'orientation',
      type: 'segmented',
      data: [
        { label: 'horizontal', value: 'horizontal' },
        { label: 'vertical', value: 'vertical' },
      ],
      initialValue: 'horizontal',
      defaultValue: 'horizontal',
    },
    { name: 'label', type: 'string', initialValue: 'Select your favorite framework/library' },
    { name: 'description', type: 'string', initialValue: 'This is anonymous' },
    { name: 'error', type: 'string', initialValue: '' },
    { name: 'required', type: 'boolean', initialValue: true, defaultValue: false },
    { name: 'spacing', type: 'size', initialValue: 'lg', defaultValue: 'lg' },
  ],
};
