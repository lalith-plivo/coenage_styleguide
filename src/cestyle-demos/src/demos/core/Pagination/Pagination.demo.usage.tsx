import React from 'react';
import { Pagination } from '@cestyle/core';

function Demo() {
  return <Pagination total={10} position="center" />;
}

export const usage: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
