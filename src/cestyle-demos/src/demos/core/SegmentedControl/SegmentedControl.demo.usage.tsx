import React from 'react';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
import { SegmentedControl } from '@cestyle/core';

function Demo() {
  return (
    <SegmentedControl
      data={[
        { label: 'React', value: 'react' },
        { label: 'Angular', value: 'ng' },
        { label: 'Vue', value: 'vue' },
        { label: 'Svelte', value: 'svelte' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SegmentedControlWrapper />
    </div>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
