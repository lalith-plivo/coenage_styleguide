import React, { useState } from 'react';
import { Group } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@cestyle/dates';

function Demo() {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} labelFormat="MM/YYYY" />;
}
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} labelFormat="MM/YYYY" />
    </Group>
  );
}

export const format: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
