import React from 'react';
import { useWindowScroll } from '@cestyle/hooks';
import { Button, Text, Group } from '@cestyle/core';

const code = `
import { useWindowScroll } from '@cestyle/hooks';
import { Button, Text, Group } from '@cestyle/core';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}
`;

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Group position="center">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Group>
  );
}

export const useWindowScrollDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
