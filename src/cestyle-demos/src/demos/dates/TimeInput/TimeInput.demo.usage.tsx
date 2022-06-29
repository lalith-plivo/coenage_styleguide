import React from 'react';
import { Container } from '@cestyle/core';
import { TimeInput } from '@cestyle/dates';

const code = `
import { TimeInput } from '@cestyle/dates';

function Demo() {
  return <TimeInput label="What time is it now?" />;
}
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeInput label="What time is it now?" />
    </Container>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
