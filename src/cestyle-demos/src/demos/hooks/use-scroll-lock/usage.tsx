import React from 'react';
import { useScrollLock } from '@cestyle/hooks';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';
import { Group, Button } from '@cestyle/core';

const code = `
import { useScrollLock } from '@cestyle/hooks';
import { Button, Group } from '@cestyle/core';
import { LockClosedIcon, LockOpen2Icon } from '@modulz/radix-icons';

function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Group position="center">
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <LockClosedIcon /> : <LockOpen2Icon />}
      >
        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
      </Button>
    </Group>
  );
}`;

function Demo() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Group position="center">
      <Button
        onClick={() => setScrollLocked((c) => !c)}
        variant="outline"
        leftIcon={scrollLocked ? <LockClosedIcon /> : <LockOpen2Icon />}
      >
        {scrollLocked ? 'Unlock scroll' : 'Lock scroll'}
      </Button>
    </Group>
  );
}

export const useScrollLockDemo: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
