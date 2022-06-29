import React from 'react';
import { Tooltip, Badge, Group, AVAILABLE_TRANSITIONS } from '@cestyle/core';

export function Demo() {
  const transitions = AVAILABLE_TRANSITIONS.map((transition) => (
    <Tooltip key={transition} label={transition} transition={transition} transitionDuration={300}>
      <Badge>{transition}</Badge>
    </Tooltip>
  ));

  return <Group position="center">{transitions}</Group>;
}

export const transitions: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
