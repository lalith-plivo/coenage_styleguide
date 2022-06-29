import React, { useState } from 'react';
import { Popover, Text, Button, Group, Image } from '@cestyle/core';

const code = `
import { useState } from 'react';
import { Popover, Text, Button, Image } from '@cestyle/core';

function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
      width={260}
      position="bottom"
      withArrow
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
}
`;

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <Group position="center">
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
        width={260}
        position="bottom"
        withArrow
        trapFocus={false}
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
    </Group>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
