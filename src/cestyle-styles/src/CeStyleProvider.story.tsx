import React from 'react';
import { storiesOf } from '@storybook/react';
import { CeStyleProvider, useCeStyleDefaultProps } from './theme';
import { createStyles, Global } from './tss';

const useStyles = createStyles((theme) => ({
  element: {
    color: theme.colors[theme.primaryColor][5],
    fontSize: theme.fontSizes.sm,
    backgroundColor: theme.colorScheme === 'dark' ? 'white' : 'black',
    paddingLeft: 100,
  },
}));

function TestElement() {
  const { classes } = useStyles(null, { name: 'TestElement' });
  const { children } = useCeStyleDefaultProps(
    'TestElement',
    { children: 'Not default' },
    {}
  ) as any;
  return <div className={classes.element}>{children}</div>;
}

storiesOf('Styles', module)
  .add('Inheritance: theme', () => (
    <CeStyleProvider
      inherit
      theme={{ primaryColor: 'orange', colorScheme: 'light' }}
      styles={{ TestElement: { element: { fontSize: 50 } } }}
      defaultProps={{ TestElement: { children: 'Default test element' } }}
      withCSSVariables
    >
      <TestElement />

      <CeStyleProvider theme={{ primaryColor: 'red' }} inherit>
        <TestElement />
      </CeStyleProvider>
    </CeStyleProvider>
  ))
  .add('ClassNames', () => (
    <CeStyleProvider
      defaultProps={{ TestElement: { children: 'Default test element' } }}
      classNames={{
        TestElement: {
          element: 'test-class',
        },
      }}
    >
      <Global
        styles={{
          '.test-class': {
            border: '1px solid orange',
          },
        }}
      />
      <TestElement />
      <TestElement />
    </CeStyleProvider>
  ));
