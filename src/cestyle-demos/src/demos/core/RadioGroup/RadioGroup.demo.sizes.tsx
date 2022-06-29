import React from 'react';
import { Radio, RadioGroup, RadioProps } from '@cestyle/core';

const getSizes = (props?: RadioProps) =>
  (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size, index) => (
    <RadioGroup size={size} key={size}>
      <Radio
        value={size}
        style={{ marginTop: index === 0 ? 0 : 15 }}
        label={`${size} size radio`}
        {...props}
      />
    </RadioGroup>
  ));

function Demo() {
  return <>{getSizes()}</>;
}

export const sizes: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
