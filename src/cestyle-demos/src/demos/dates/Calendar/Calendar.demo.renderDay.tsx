import React, { useState } from 'react';
import { Group, Indicator } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@cestyle/dates';
import { Indicator } from '@cestyle/core';

function Demo() {
  const [value, setValue] = useState(null);

  return (
    <Group position="center">
      <Calendar
        value={value}
        onChange={setValue}
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={8} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
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
        renderDay={(date) => {
          const day = date.getDate();
          return (
            <Indicator size={6} color="red" offset={8} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </Group>
  );
}

export const renderDay: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
