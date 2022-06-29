import dayjs from 'dayjs';
import React from 'react';
import { Container } from '@cestyle/core';
import { TimeRangeInput } from '@cestyle/dates';

const code = `
import dayjs from 'dayjs';
import { TimeRangeInput } from '@cestyle/dates';

function Demo() {
  return (
    <TimeRangeInput
      label="Appointment time"
      format="12"
      defaultValue={[new Date(), dayjs(new Date()).add(30, 'minutes').toDate()]}
    />
  );
}
`;

function Demo() {
  return (
    <Container size={340}>
      <TimeRangeInput
        label="Appointment time"
        format="12"
        defaultValue={[new Date(), dayjs(new Date()).add(30, 'minutes').toDate()]}
      />
    </Container>
  );
}

export const format: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
