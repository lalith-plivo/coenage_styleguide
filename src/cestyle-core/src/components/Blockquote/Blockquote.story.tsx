import React from 'react';
import { storiesOf } from '@storybook/react';
import { CeStyleProvider } from '@cestyle/styles';
import { StylesAPIStory } from '@cestyle/storybook';
import { Blockquote } from './Blockquote';

storiesOf('Blockquote', module)
  .add('Styles API', () => (
    <StylesAPIStory
      component={Blockquote}
      name="Blockquote"
      props={{ children: 'Blockquote', cite: 'cite' }}
    />
  ))
  .add('Default props on CeStyleProvider', () => (
    <CeStyleProvider defaultProps={{ Blockquote: { color: 'orange' } }}>
      <Blockquote cite="– Cite">Hello there</Blockquote>
    </CeStyleProvider>
  ));
