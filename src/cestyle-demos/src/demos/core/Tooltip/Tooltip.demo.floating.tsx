import React from 'react';
import { FloatingTooltip, FloatingTooltipProps, Group, Button } from '@cestyle/core';

const Wrapper = (props: FloatingTooltipProps) => (
  <div style={{ padding: 30 }}>
    <Group position="center">
      <FloatingTooltip {...props}>
        <Button variant="outline" color="gray" size="xl">
          With floating tooltip
        </Button>
      </FloatingTooltip>
    </Group>
  </div>
);

const codeTemplate = (props: string) => `
import { FloatingTooltip, Button } from '@cestyle/core';

function Demo() {
  return (
    <FloatingTooltip${props}>
      <Button variant="outline" color="gray" size="xl">
        With tooltip
      </Button>
    </FloatingTooltip>
  );
}
`;

export const floating: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'label',
      type: 'string',
      initialValue: 'Tooltip',
    },
    {
      name: 'color',
      type: 'color',
      initialValue: 'gray',
      defaultValue: 'gray',
    },

    {
      name: 'position',
      type: 'select',
      data: [
        { label: 'top', value: 'top' },
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'bottom', value: 'bottom' },
      ],
      initialValue: 'right',
      defaultValue: 'right',
    },
  ],
};
