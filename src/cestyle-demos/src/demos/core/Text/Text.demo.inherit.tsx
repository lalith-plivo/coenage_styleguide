import React from 'react';
import { Text, Title } from '@cestyle/core';

const code = `
import { Text, Title } from '@cestyle/core';

function Demo() {
  return <Title order={3}>Highlight <Text color="blue" inherit component="span">something</Text>in title</Title>;
}
`;

function Demo() {
  return (
    <Title order={3}>
      Title in which you want to{' '}
      <Text color="blue" inherit component="span">
        highlight
      </Text>{' '}
      something
    </Title>
  );
}

export const inherit: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
