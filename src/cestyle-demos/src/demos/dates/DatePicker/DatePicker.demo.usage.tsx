import React from 'react';
import { DatePicker } from '@cestyle/dates';

const code = `
import { DatePicker } from '@cestyle/dates';

function Demo() {
  return <DatePicker placeholder="Pick date" label="Event date" required />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker placeholder="Pick date" label="Event date" required />
    </div>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
