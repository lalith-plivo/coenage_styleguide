import React from 'react';
import { Tabs, TabsProps } from '@cestyle/core';

function Wrapper(props: TabsProps) {
  return (
    <Tabs {...props} styles={{ body: { paddingTop: 5 } }}>
      <Tabs.Tab label="First">First tab content</Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}

const codeTemplate = (props: string) => `
import { Tabs } from '@cestyle/core';

function Demo() {
  return (
    <Tabs${props}>
      <Tabs.Tab label="First">First tab content</Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}
`;

export const positionConfigurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'grow', type: 'boolean', defaultValue: false },
    {
      name: 'position',
      type: 'select',
      initialValue: 'left',
      defaultValue: 'left',
      data: [
        { label: 'left', value: 'left' },
        { label: 'right', value: 'right' },
        { label: 'center', value: 'center' },
        { label: 'apart', value: 'apart' },
      ],
    },
    {
      name: 'variant',
      type: 'segmented',
      initialValue: 'default',
      defaultValue: 'default',
      data: [
        { value: 'default', label: 'Default' },
        { value: 'outline', label: 'Outline' },
        { value: 'pills', label: 'Pills' },
      ],
    },
  ],
};
