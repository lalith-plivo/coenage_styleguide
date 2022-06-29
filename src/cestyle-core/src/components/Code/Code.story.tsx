import React from 'react';
import { storiesOf } from '@storybook/react';
import { CeStyleProvider } from '@cestyle/styles';
import { Code } from './Code';

storiesOf('Code', module).add('Default props on CeStyleProvider', () => (
  <CeStyleProvider defaultProps={{ Code: { color: 'red' } }}>
    <Code>Default props</Code>
  </CeStyleProvider>
));
