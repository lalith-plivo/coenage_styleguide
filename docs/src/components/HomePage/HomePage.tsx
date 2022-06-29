import React from 'react';
import { useCeStyleTheme, Container, Box } from '@cestyle/core';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Footer } from '../Footer/Footer';
import { CeStyleUiBanner } from '../CeStyleUiBanner/CeStyleUiBanner';
// import { Community } from './Community/Community';
import { Customize } from './Customize/Customize';
// import { Usage } from './Usage/Usage';
import { Explore } from './Explore/Explore';

export function HomePage() {
  const theme = useCeStyleTheme();
  return (
    <div>
      <Head title="CeStyle" disableTitleTemplate />
      <div style={{ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm }}>
        <Jumbotron />

        <Explore />
        <Box
          sx={{
            paddingTop: 120,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          }}
        >
          <Container size={1100}>
            <CeStyleUiBanner />
          </Container>
        </Box>
        <Customize />
        {/* <Usage /> */}
        {/* <Community /> */}
      </div>
      <Footer />
    </div>
  );
}
