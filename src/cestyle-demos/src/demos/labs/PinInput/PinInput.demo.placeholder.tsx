import React from 'react';
import { PinInput } from '@cestyle/labs';

function Demo() {
  return <PinInput length={4} placeholder="⭐️" />;
}

export const placeholder: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
