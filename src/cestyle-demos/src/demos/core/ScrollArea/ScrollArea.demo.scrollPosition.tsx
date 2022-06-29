import React, { useState } from 'react';
import { Group, Code, Text, ScrollArea } from '@cestyle/core';
import { Content } from './_content';

const code = `
import { useState } from 'react';
import { Text, ScrollArea, Code } from '@cestyle/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          {/* ... content */}
        </div>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <Group position="center" direction="column">
      <ScrollArea
        style={{ width: 300, height: 200 }}
        onScrollPositionChange={onScrollPositionChange}
      >
        <div style={{ width: 600 }}>
          <Content />
        </div>
      </ScrollArea>
      <Text>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </Text>
    </Group>
  );
}

export const scrollPosition: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
