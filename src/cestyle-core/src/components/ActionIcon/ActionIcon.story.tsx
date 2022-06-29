import React from 'react';
import { storiesOf } from '@storybook/react';
import { CeStyleProvider } from '@cestyle/styles';
import { StylesAPIStory } from '@cestyle/storybook';
import { ActionIcon } from './ActionIcon';

storiesOf('ActionIcon', module)
  .add('Styles API', () => (
    <StylesAPIStory name="ActionIcon" component={ActionIcon} props={{ children: '$' }} />
  ))
  .add('Default radius on theme', () => (
    <CeStyleProvider theme={{ defaultRadius: 0 }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </CeStyleProvider>
  ))
  .add('Default props on CeStyleProvider', () => (
    <CeStyleProvider defaultProps={{ ActionIcon: { color: 'blue', radius: 'xl' } }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </CeStyleProvider>
  ));
