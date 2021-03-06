import React from 'react';
import { Flame } from 'tabler-icons-react';
import { Blockquote } from '@cestyle/core';

const code = `
import { Blockquote } from '@cestyle/core';
import { Flame } from 'tabler-icons-react';

function Demo() {
  return (
    <Blockquote
      cite="– Your poor i3 from 2012 struggling its best"
      icon={<Flame size={24} />}
    >
      webpack built caa9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <Blockquote cite="– Your poor i3 from 2012 struggling its best" icon={<Flame size={24} />}>
        webpack built 40a9bf3d1a0a0914ed84 in 28259ms
      </Blockquote>
    </div>
  );
}

export const icon: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
