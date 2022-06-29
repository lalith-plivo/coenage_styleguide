import React from 'react';
import { storiesOf } from '@storybook/react';
import { CeStyleProvider } from '@cestyle/styles';
import { StylesAPIStory } from '@cestyle/storybook';
import { Anchor } from './Anchor';

storiesOf('Anchor', module)
  .add('Styles API', () => (
    <StylesAPIStory component={Anchor} name="Anchor" props={{ children: 'Anchor' }} />
  ))
  .add('Custom component', () => (
    <div style={{ padding: 40 }}>
      <Anchor component="button" type="button">
        Anchor as button
      </Anchor>

      <br />

      <Anchor component="span">Anchor as span</Anchor>
    </div>
  ))
  .add('Text props', () => (
    <div style={{ padding: 40 }}>
      <Anchor size="lg" weight="bold" color="red">
        Text props
      </Anchor>
    </div>
  ))
  .add('Default props on CeStyleProvider', () => (
    <CeStyleProvider defaultProps={{ Anchor: { weight: 900 } }}>
      <Anchor>Some link</Anchor>
    </CeStyleProvider>
  ));
