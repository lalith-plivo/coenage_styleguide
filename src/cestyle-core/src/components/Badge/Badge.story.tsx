import React from 'react';
import { storiesOf } from '@storybook/react';
import { StylesAPIStory } from '@cestyle/storybook';
import { CeStyleProvider } from '@cestyle/styles';
import { Badge } from './Badge';

storiesOf('Badge', module)
  .add('Styles API', () => (
    <StylesAPIStory
      name="Badge"
      component={Badge}
      props={{ children: 'Badge', rightSection: '$', leftSection: '$' }}
    />
  ))
  .add('Default props on CeStyleProvider', () => (
    <CeStyleProvider defaultProps={{ Badge: { color: 'red', variant: 'filled' } }}>
      <Badge>Default props badge</Badge>
    </CeStyleProvider>
  ))
  .add('Default radius on CeStyleProvider', () => (
    <CeStyleProvider theme={{ defaultRadius: 0 }}>
      <Badge>Default radius badge</Badge>
    </CeStyleProvider>
  ));
