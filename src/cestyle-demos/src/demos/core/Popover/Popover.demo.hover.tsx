import React, { useState } from 'react';
import { Popover, Text, Badge, Group, Image } from '@cestyle/core';

const code = `
import { useState } from 'react';
import { Popover, Badge, Image, Text } from '@cestyle/core';

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom"
      placement="center"
      withArrow
      trapFocus={false}
      closeOnEscape={false}
      transition="pop-top-left"
      width={260}
      styles={{ body: { pointerEvents: 'none' } }}
      target={
        <Badge onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
          Hover badge to see popover
        </Badge>
      }
    >
      <div style={{ display: 'flex' }}>
        <Image
          src="./logo.svg"
          width={30}
          height={30}
          sx={{ minWidth: 30 }}
          mr="md"
        />
        <Text size="sm">Thanks for stopping by and checking CeStyle, you are awesome!</Text>
      </div>
    </Popover>
  );
}`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Group position="center">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          position="bottom"
          placement="center"
          withArrow
          trapFocus={false}
          closeOnEscape={false}
          width={260}
          styles={{ body: { pointerEvents: 'none' } }}
          transition="pop-top-left"
          target={
            <Badge onMouseEnter={() => setOpened(true)} onMouseLeave={() => setOpened(false)}>
              Hover badge to see popover
            </Badge>
          }
        >
          <div style={{ display: 'flex' }}>
            <Image
              src="https://raw.githubusercontent.com/cestyledev/cestyle/e630956424828b4103372d781cc64f0a54eebb33/docs/src/images/favicon.svg"
              width={30}
              height={30}
              sx={{ minWidth: 30 }}
              mr="md"
            />
            <Text size="sm">Thanks for stopping by and checking CeStyle, you are awesome!</Text>
          </div>
        </Popover>
      </div>
    </Group>
  );
}

export const hover: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
