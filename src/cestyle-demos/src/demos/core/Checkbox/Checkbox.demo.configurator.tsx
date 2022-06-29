import React from 'react';
import { Checkbox, CheckboxProps } from '@cestyle/core';

const codeTemplate = (props: string) => `
import { Checkbox } from '@cestyle/core';

function Demo() {
  return (
    <Checkbox
     ${props}
    />
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: (props: CheckboxProps) => <Checkbox {...props} defaultChecked />,
  codeTemplate,
  configuratorProps: {
    multiline: 3,
  },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'I agree to sell my privacy',
    },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'indeterminate', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
