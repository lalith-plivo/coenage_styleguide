import React from 'react';
import { Grid } from '@cestyle/core';
import { ColWrapper as Col } from './_col-wrapper';

const code = `
import { Grid } from '@cestyle/core';

function Demo() {
  return (
    <Grid>
      <Grid.Col span={4}>1</Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
      <Grid.Col span={4}>3</Grid.Col>
      <Grid.Col span={4}>4</Grid.Col>
    </Grid>
  );
}
`;

function Demo() {
  return (
    <Grid>
      <Col span={4}>1</Col>
      <Col span={4}>2</Col>
      <Col span={4}>3</Col>
      <Col span={4}>4</Col>
    </Grid>
  );
}

export const rows: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};