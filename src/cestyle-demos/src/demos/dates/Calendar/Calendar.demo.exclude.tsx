import React, { useState } from 'react';
import { Group } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@cestyle/dates';

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Calendar
      value={value}
      onChange={setValue}
      excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        excludeDate={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
    </Group>
  );
}

export const exclude: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
