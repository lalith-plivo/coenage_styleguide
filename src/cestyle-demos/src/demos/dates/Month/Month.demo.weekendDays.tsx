import React, { useState } from 'react';
import { Group } from '@cestyle/core';
import { Month } from '@cestyle/dates';

const code = `
import { useState } from 'react';
import { Month } from '@cestyle/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Month
      month={value}
      value={value}
      onChange={setValue}
      weekendDays={[5, 6]}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} weekendDays={[5, 6]} />
    </Group>
  );
}

export const weekendDays: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
