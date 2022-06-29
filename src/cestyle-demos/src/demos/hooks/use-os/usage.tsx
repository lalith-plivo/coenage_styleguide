import React from 'react';
import { useOs } from '@cestyle/hooks';
import { Text } from '@cestyle/core';

const code = `
import { useOs } from '@cestyle/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
