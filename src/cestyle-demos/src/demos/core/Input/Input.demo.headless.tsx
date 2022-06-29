import React from 'react';
import { BrandTwitter } from 'tabler-icons-react';
import { Input } from '@cestyle/core';

const code = `
import { Input } from '@cestyle/core';
import { BrandTwitter } from 'tabler-icons-react';

function Demo() {
  return (
    <Input
      styles={{ input: { width: '100%', boxSizing: 'border-box' } }}
      icon={<BrandTwitter size={16} />}
      rightSection="$"
      variant="headless"
      placeholder="Add your own styles with styles API"
    />
  );
}
`;

function Demo() {
  return (
    <Input
      styles={{ input: { width: '100%', boxSizing: 'border-box' } }}
      icon={<BrandTwitter size={16} />}
      rightSection="$"
      variant="headless"
      placeholder="Add your own styles with styles API"
    />
  );
}

export const headless: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
