import React from 'react';
import { Switch, SwitchProps } from '@cestyle/core';

const codeTemplate = (props: string) => `
import { Switch } from '@cestyle/core';

function Demo() {
  return (
    <Switch
     ${props}
    />
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: (props: SwitchProps) => <Switch {...props} defaultChecked />,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'I agree to sell my privacy',
    },
    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
