import React, { useState } from 'react';
import { ColorPicker, Text, Group } from '@cestyle/core';

const code = `
import { useState } from 'react';
import { ColorPicker, Group, Text } from '@cestyle/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Group position="center" direction="column">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Group>
  );
}
`;

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <Group position="center" direction="column">
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </Group>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
