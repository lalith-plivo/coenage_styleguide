import React from 'react';
import { Popover, Image, Badge, Text, PopoverProps } from '@cestyle/core';

function Wrapper(props: PopoverProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: 200 }}>
      <Popover
        opened
        position="top"
        placement="center"
        withArrow
        trapFocus={false}
        closeOnEscape={false}
        width={260}
        styles={{ body: { pointerEvents: 'none' } }}
        transition="slide-up"
        target={<Badge>Badge with popover</Badge>}
        {...props}
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
  );
}

const codeTemplate = (props: string) => `
import { Popover, Image, Badge, Text } from '@cestyle/core';

function Demo() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: 200 }}>
      <Popover
        opened
        position="top"
        placement="center"
        withArrow
        trapFocus={false}
        closeOnEscape={false}
        width={260}
        styles={{ body: { pointerEvents: 'none' } }}
        transition="slide-up"
        target={<Badge>Badge with popover</Badge>}
       ${props}
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
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configuratorProps: { multiline: 4 },
  configurator: [
    { name: 'spacing', type: 'size', initialValue: 'md', defaultValue: 'md' },
    { name: 'shadow', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
  ],
};
