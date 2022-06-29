import React from 'react';
import { CE_STYLES_SIZES } from '@cestyle/core';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = CE_STYLES_SIZES.map((size, index) => (
    <div style={{ marginTop: index === 0 ? 0 : 15 }} key={size}>
      <SegmentedControlWrapper size={size} />
    </div>
  ));

  return <>{items}</>;
}

export const sizes: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
