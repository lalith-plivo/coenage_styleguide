import React from 'react';
import { Container } from '@cestyle/core';
import { TimeInput } from '@cestyle/dates';

const code = `
import { TimeInput } from '@cestyle/dates';

function Demo() {
  return <TimeInput label="What time is it now?" withSeconds defaultValue={new Date()} />;
}
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" withSeconds defaultValue={new Date()} />
    </Container>
  );
}

export const withSeconds: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
