import React from 'react';
import { Mark, MarkProps, Text } from '@cestyle/core';

function Wrapper(props: MarkProps) {
  return (
    <Text>
      Highlight <Mark {...props}>this chunk</Mark> of the text
    </Text>
  );
}

const codeTemplate = (props: string) => `
import { Text, Mark } from '@cestyle/core';

function Demo() {
  return (
    <Text>
      Highlight <Mark${props}>this chunk</Mark> of the text
    </Text>
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [{ name: 'color', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' }],
};
