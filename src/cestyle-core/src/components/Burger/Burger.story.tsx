import React from 'react';
import { storiesOf } from '@storybook/react';
import { CeStyleProvider } from '@cestyle/styles';
import { Burger } from './Burger';

storiesOf('Burger', module).add('Default props on CeStyleProvider', () => (
  <CeStyleProvider defaultProps={{ Burger: { color: 'red' } }}>
    <Burger opened={false} />
  </CeStyleProvider>
));
