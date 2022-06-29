import React from 'react';
import { Pagination, Group } from '@cestyle/core';

function Wrapper(props: any) {
  return (
    <Group position="center">
      <Pagination total={10} {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Pagination } from '@cestyle/core';

function Demo() {
  return <Pagination total={10}${props} />;
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },

    { name: 'withControls', type: 'boolean', initialValue: true, defaultValue: true },
    { name: 'withEdges', type: 'boolean', initialValue: false, defaultValue: false },
  ],
};
