import React from 'react';
import { Text, Paper } from '@cestyle/core';
import { AccordionDemo, TimelineBase } from '@cestyle/demos';

export function ContentDemos() {
  return (
    <Paper shadow="md" p={30}>
      <div>
        <Text size="lg" mb="md">
          Accordion component
        </Text>
        <AccordionDemo />
      </div>

      <div style={{ marginTop: 30 }}>
        <Text size="lg" mb={15}>
          Timeline component
        </Text>

        <TimelineBase />
      </div>
    </Paper>
  );
}
