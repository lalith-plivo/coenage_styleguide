import React from 'react';
import { Autocomplete } from '@cestyle/core';

const codeTemplate = (props: string) => `
import { Autocomplete } from '@cestyle/core';

function Demo() {
  return <Autocomplete${props} />;
}
`;

export const flip: CeStyleDemo = {
  type: 'configurator',
  component: (props: any) => (
    <Autocomplete
      placeholder="Pick one"
      label="Your favorite framework/library"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
      {...props}
    />
  ),
  codeTemplate,
  configuratorProps: { multiline: false },
  configurator: [
    {
      name: 'dropdownPosition',
      type: 'segmented',
      data: [
        { label: 'top', value: 'top' },
        { label: 'bottom', value: 'bottom' },
        { label: 'flip', value: 'flip' },
      ],
      initialValue: 'flip',
      defaultValue: 'flip',
    },
  ],
};
