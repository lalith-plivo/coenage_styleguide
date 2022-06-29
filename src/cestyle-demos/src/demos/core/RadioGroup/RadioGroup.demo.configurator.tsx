import React from 'react';
import { RadioGroup, RadioGroupProps, Radio } from '@cestyle/core';

const codeTemplate = (props: string) => `
import { RadioGroup, Radio } from '@cestyle/core';

function Demo() {
  return (
    <RadioGroup
     ${props}
    >
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </RadioGroup>
  );
}
`;

function Wrapper(props: RadioGroupProps) {
  return (
    <RadioGroup defaultValue="react" {...props}>
      <Radio value="react" label="React" />
      <Radio value="svelte" label="Svelte" />
      <Radio value="ng" label="Angular" />
      <Radio value="vue" label="Vue" />
    </RadioGroup>
  );
}

export const configurator: CeStyleDemo = {
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
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'required', type: 'boolean', initialValue: true, defaultValue: false },
  ],
};
