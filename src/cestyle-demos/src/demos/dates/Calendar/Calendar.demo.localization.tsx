import 'dayjs/locale/ru';
import React, { useState } from 'react';
import { Group } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

const code = `
import 'dayjs/locale/ru';
import { useState } from 'react';
import { Calendar } from '@cestyle/dates';

function Demo() {
  const [value, setValue] = useState(null);
  return <Calendar value={value} onChange={setValue} locale="ru" />;
}
`;

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} locale="ru" />
    </Group>
  );
}

export const localization: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
