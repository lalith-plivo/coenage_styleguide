import React from 'react';
import { AlertCircle } from 'tabler-icons-react';
import { Alert } from '@cestyle/core';

function Wrapper(props: React.ComponentPropsWithoutRef<typeof Alert>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Alert {...props} icon={<AlertCircle size={16} />} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `
import { Alert } from '@cestyle/core';
import { AlertCircle } from 'tabler-icons-react';

function Demo() {
  return (
    <Alert icon={<AlertCircle size={16} />}${props}>
      ${children}
    </Alert>
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'title', type: 'string', initialValue: 'Bummer!' },
    {
      name: 'children',
      type: 'string',
      initialValue:
        'Something terrible happened! You made a mistake and there is no going back, your data was lost forever!',
    },
    { name: 'withCloseButton', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'info', value: 'info' },
        { label: 'success', value: 'success' },
        { label: 'warning', value: 'warning' },
        { label: 'danger', value: 'danger' },
      ],
      initialValue: 'info',
      defaultValue: 'info',
    },
  ],
};
