import React from 'react';
import { Text } from '@cestyle/core';
import { SegmentedControlWrapper } from './Wrapper';

const code = `
import { SegmentedControl } from '@cestyle/core';

function Demo() {
  return (
    <>
      {/* No transitions */}
      <SegmentedControl transitionDuration={0} />

      {/* 500ms linear transition */}
      <SegmentedControl
        transitionDuration={500}
        transitionTimingFunction="linear"
      />
    </>
  );
}

`;

function Demo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <Text size="sm" weight="semibold" style={{ marginBottom: 3 }}>
          No transitions
        </Text>
        <SegmentedControlWrapper transitionDuration={0} />
      </div>

      <div style={{ marginTop: 15 }}>
        <Text size="sm" weight="semibold" style={{ marginBottom: 3 }}>
          500ms linear transition
        </Text>
        <SegmentedControlWrapper transitionDuration={500} transitionTimingFunction="linear" />
      </div>
    </div>
  );
}

export const transitions: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
