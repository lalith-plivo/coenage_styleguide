import React from 'react';
import { CE_STYLES_SIZES } from '@cestyle/core';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = CE_STYLES_SIZES.map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size="lg" radius={size} />
    </div>
  ));

  return <>{items}</>;
}

export const radius: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
