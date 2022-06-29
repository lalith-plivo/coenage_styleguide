import React from 'react';
import { storiesOf } from '@storybook/react';
import { CeStyleProvider } from '@cestyle/styles';
import { Card } from './Card';

storiesOf('Card', module)
  .add('Default props on CeStyleProvider', () => (
    <CeStyleProvider defaultProps={{ Card: { shadow: 'xl', padding: 0, withBorder: true } }}>
      <Card sx={{ maxWidth: 400 }} mx="auto" my={50}>
        Default props card
      </Card>
    </CeStyleProvider>
  ))
  .add('Default radius on CeStyleProvider', () => (
    <CeStyleProvider theme={{ defaultRadius: 'xl' }}>
      <Card sx={{ maxWidth: 400 }} mx="auto" my={50} withBorder>
        Default radius card
      </Card>
    </CeStyleProvider>
  ));
