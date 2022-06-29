import React from 'react';
import { Progress, ProgressProps } from '@cestyle/core';

function Wrapper(props: ProgressProps) {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <Progress {...props} />
    </div>
  );
}

const codeTemplate = (props: string) => `
import { Progress } from '@cestyle/core';

function Demo() {
  return <Progress${props} />;
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'value', type: 'number', initialValue: 50, max: 100, min: 0, step: 10 },
    { name: 'striped', type: 'boolean', initialValue: false, defaultValue: false },
    { name: 'animate', type: 'boolean', initialValue: false, defaultValue: false },
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
