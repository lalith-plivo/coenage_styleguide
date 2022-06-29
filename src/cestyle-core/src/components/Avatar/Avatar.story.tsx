import React from 'react';
import { storiesOf } from '@storybook/react';
import { StylesAPIStory } from '@cestyle/storybook';
import { CeStyleProvider } from '@cestyle/styles';
import { Avatar } from './Avatar';

storiesOf('Avatar', module)
  .add('Styles API', () => <StylesAPIStory name="Avatar" component={Avatar} props={{}} />)
  .add('Default props on CeStyleProvider', () => (
    <CeStyleProvider defaultProps={{ Avatar: { color: 'cyan' } }}>
      <Avatar>MJ</Avatar>
    </CeStyleProvider>
  ))
  .add('Default radius on CeStyleProvider', () => (
    <CeStyleProvider theme={{ defaultRadius: 0 }}>
      <Avatar>MJ</Avatar>
    </CeStyleProvider>
  ));
