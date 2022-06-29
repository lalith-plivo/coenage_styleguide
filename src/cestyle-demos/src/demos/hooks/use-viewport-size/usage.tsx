import React from 'react';
import { useViewportSize } from '@cestyle/hooks';
import { Text } from '@cestyle/core';

const code = `
import { useViewportSize } from '@cestyle/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
