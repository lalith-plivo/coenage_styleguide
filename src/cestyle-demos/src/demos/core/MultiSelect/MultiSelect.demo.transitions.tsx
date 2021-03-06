import React from 'react';
import { MultiSelect } from '@cestyle/core';
import { data } from './_data';

const code = `
import { MultiSelect } from '@cestyle/core';

function Demo() {
  return (
    <MultiSelect
      data={[]}
      transitionDuration={150}
      transition="pop-top-left"
      transitionTimingFunction="ease"
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <MultiSelect
        data={data}
        transitionDuration={150}
        transition="pop-top-left"
        transitionTimingFunction="ease"
        label="Your favorite frameworks/libraries"
        placeholder="Pick all that you like"
      />
    </div>
  );
}

export const transitions: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
