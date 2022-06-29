import React from 'react';
import { Code, Group } from '@cestyle/core';

const code = `
import { Code } from '@cestyle/core';

function Demo() {
  return (
    <>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </>
  );
}
`;

function Demo() {
  return (
    <Group>
      <Code color="red">React.createElement()</Code>
      <Code color="teal">React.createElement()</Code>
      <Code color="blue">React.createElement()</Code>
    </Group>
  );
}

export const colors: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
