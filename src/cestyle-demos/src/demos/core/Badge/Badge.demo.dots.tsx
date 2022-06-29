import React from 'react';
import { Group, CE_STYLES_COLORS, Badge } from '@cestyle/core';

function Demo() {
  const items = CE_STYLES_COLORS.map((color) => (
    <Badge key={color} color={color} variant="dot">
      {color}
    </Badge>
  ));

  return <Group position="center">{items}</Group>;
}

export const dots: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
