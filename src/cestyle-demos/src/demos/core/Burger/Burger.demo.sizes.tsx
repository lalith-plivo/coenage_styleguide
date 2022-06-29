import React from 'react';
import { CE_STYLES_SIZES, Group } from '@cestyle/core';
import { DemoBase } from './_base';

const items = CE_STYLES_SIZES.map((size) => <DemoBase size={size} key={size} />);

export function Demo() {
  return <Group position="center">{items}</Group>;
}

export const sizes: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
