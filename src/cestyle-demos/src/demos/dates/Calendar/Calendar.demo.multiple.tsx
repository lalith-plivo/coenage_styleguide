import React, { useState } from 'react';
import { Group } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

const code = `
import { useState } from 'react';
import { Calendar } from '@cestyle/dates';

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return <Calendar multiple value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState<Date[]>([]);
  return (
    <Group position="center">
      <Calendar multiple value={value} onChange={setValue} />
    </Group>
  );
}

export const multiple: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
