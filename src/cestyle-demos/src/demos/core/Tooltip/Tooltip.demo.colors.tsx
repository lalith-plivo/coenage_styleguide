import React from 'react';
import { upperFirst } from '@cestyle/hooks';
import { Tooltip, Badge, Group, CE_STYLES_COLORS } from '@cestyle/core';

export function Demo() {
  const colors = CE_STYLES_COLORS.map((color) => (
    <Tooltip key={color} color={color} label={upperFirst(color)} withArrow>
      <Badge color={color}>{upperFirst(color)}</Badge>
    </Tooltip>
  ));

  return <Group position="center">{colors}</Group>;
}

export const colors: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
