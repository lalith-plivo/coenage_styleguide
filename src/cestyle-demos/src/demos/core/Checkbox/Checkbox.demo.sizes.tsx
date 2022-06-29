import React from 'react';
import { Checkbox, CE_STYLES_SIZES, Group } from '@cestyle/core';

function Demo() {
  const items = CE_STYLES_SIZES.map((size) => (
    <Checkbox key={size} size={size} defaultChecked label={`${size} checkbox`} />
  ));

  return (
    <Group direction="column" spacing="sm">
      {items}
    </Group>
  );
}

export const sizes: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
