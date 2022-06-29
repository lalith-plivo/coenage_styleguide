import React from 'react';
import { Avatar, AvatarProps, Group } from '@cestyle/core';
import { avatars } from './_mockdata';

function Wrapper(props: AvatarProps<'div'>) {
  return (
    <Group position="center">
      <Avatar {...props} />
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { Avatar } from '@cestyle/core';

function Demo() {
  return <Avatar${props} />;
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'size', type: 'size', initialValue: 'md', defaultValue: 'md' },
    {
      name: 'src',
      type: 'string',
      initialValue: avatars[1],
    },
  ],
};
