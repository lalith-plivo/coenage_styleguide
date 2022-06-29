import React from 'react';
import { Tabs } from '@cestyle/core';

const code = `
import { Tabs } from '@cestyle/core';

function Demo() {
  return (
    <Tabs color="teal">
      <Tabs.Tab label="Teal tab">Teal tab content</Tabs.Tab>
      <Tabs.Tab label="Still teal">Teal tab #2</Tabs.Tab>
      <Tabs.Tab label="Pink tab" color="pink">
        Pink tab content
      </Tabs.Tab>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs color="teal">
      <Tabs.Tab label="Teal tab">Teal tab content</Tabs.Tab>
      <Tabs.Tab label="Still teal">Teal tab #2</Tabs.Tab>
      <Tabs.Tab label="Pink tab" color="pink">
        Pink tab content
      </Tabs.Tab>
    </Tabs>
  );
}

export const colors: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
