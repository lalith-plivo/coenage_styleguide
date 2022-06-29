import React, { useState } from 'react';
import { Container } from '@cestyle/core';
import { Footer } from '../Footer/Footer';
import Head from '../Head/Head';
import { Installation } from './Installation/Installation';
import { Guides } from './Guides/Guides';
import { NextSteps } from './NextSteps/NextSteps';
import { CeStyleUiBanner } from '../CeStyleUiBanner/CeStyleUiBanner';
import useStyles from './GettingStarted.styles';

export function GettingStarted() {
  const { classes } = useStyles();
  const [dependencies, setDependencies] = useState('@cestyle/hooks @cestyle/core');

  return (
    <>
      <Head title="Getting started" />

      <div className={classes.wrapper}>
        <Container px={null} className={classes.container} size={1100}>
          <Installation setDependencies={setDependencies} />
          <Guides dependencies={dependencies} />
          <NextSteps />
          <CeStyleUiBanner />
        </Container>
      </div>

      <Footer withNavbar />
    </>
  );
}
