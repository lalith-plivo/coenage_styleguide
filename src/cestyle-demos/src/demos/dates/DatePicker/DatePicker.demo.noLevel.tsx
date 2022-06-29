import React from 'react';
import { DatePicker } from '@cestyle/dates';

const code = `
import { DatePicker } from '@cestyle/dates';

function Demo() {
  return <DatePicker allowLevelChange={false} placeholder="No level change" label="Event date" />;
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker allowLevelChange={false} placeholder="No level change" label="Event date" />
    </div>
  );
}

export const noLevel: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
