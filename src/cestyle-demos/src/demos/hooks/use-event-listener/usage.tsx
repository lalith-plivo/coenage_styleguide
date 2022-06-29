import React, { useState, useCallback } from 'react';
import { Button, Group } from '@cestyle/core';
import { useEventListener } from '@cestyle/hooks';

const code = `
import { useState, useCallback } from 'react';
import { Button, Group } from '@cestyle/core';
import { useEventListener } from '@cestyle/hooks';

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);

  return (
    <Group position="center">
      <Button ref={ref}>Button clicks: {count}</Button>
    </Group>
  );
}
`;

function Demo() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((c) => c + 1), []);
  const ref = useEventListener('click', increment);

  return (
    <Group position="center">
      <Button ref={ref}>Button clicks: {count}</Button>
    </Group>
  );
}

export const useEventListenerDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
