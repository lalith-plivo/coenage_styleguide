import React from 'react';
import { CE_STYLES_COLORS } from '@cestyle/styles';
import { Button } from './Button';
import { Group } from '../Group';

export default { title: 'Button' };

export const Colors = () => {
  const items = CE_STYLES_COLORS.map((color) => (
    <Group mt="xl" key={color}>
      <Button color={color}>Filled button</Button>
      <Button color={color} variant="light">
        Light button
      </Button>
      <Button color={color} variant="outline">
        Outline button
      </Button>
    </Group>
  ));

  return <div style={{ padding: 40 }}>{items}</div>;
};
