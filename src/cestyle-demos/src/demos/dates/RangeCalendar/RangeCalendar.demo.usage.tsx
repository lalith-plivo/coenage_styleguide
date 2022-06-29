import React, { useState } from 'react';
import { Group } from '@cestyle/core';
import { RangeCalendar } from '@cestyle/dates';

const code = `
import { useState } from 'react';
import { RangeCalendar } from '@cestyle/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);

  return <RangeCalendar value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(2021, 11, 1),
    new Date(2021, 11, 5),
  ]);
  return (
    <Group position="center">
      <RangeCalendar value={value} onChange={setValue} />
    </Group>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
