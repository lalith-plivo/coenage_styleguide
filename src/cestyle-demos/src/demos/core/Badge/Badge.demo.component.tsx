import React from 'react';
import { Group, Badge } from '@cestyle/core';

const code = `
import { Badge } from '@cestyle/core';

const CustomComponent = ({ pads, children, ...others }: { pads: string; children: React.ReactNode; }) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

function Demo() {
  return (
    <>
      <Badge component="a" href="https://cestyle.dev" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </>
  );
}
`;

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

function Demo() {
  return (
    <Group position="center">
      <Badge component="a" href="https://cestyle.dev" variant="outline">
        Link badge
      </Badge>

      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}

export const component: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
