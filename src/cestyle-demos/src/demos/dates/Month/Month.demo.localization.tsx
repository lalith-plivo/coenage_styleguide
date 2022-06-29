import 'dayjs/locale/ru';
import React, { useState } from 'react';
import { Group } from '@cestyle/core';
import { Month } from '@cestyle/dates';

const code = `
import 'dayjs/locale/ru';
import { useState } from 'react';
import { Month } from '@cestyle/dates';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Month locale="ru" month={value} value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} locale="ru" />
    </Group>
  );
}

export const localization: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
