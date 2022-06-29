import React from 'react';
import { Tabs } from '@cestyle/core';

const code = `
import { Tabs } from '@cestyle/core';

function Demo() {
  return (
    <Tabs variant="outline">
      <Tabs.Tab label="First">First tab content</Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs variant="outline">
      <Tabs.Tab label="First">First tab content</Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}

export const outline: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
