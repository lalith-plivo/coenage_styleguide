import React from 'react';
import { Prism } from '@cestyle/prism';
import {
  Group,
  Button,
  Badge,
  CeStyleProvider,
  useCeStyleTheme,
  createStyles,
} from '@cestyle/core';

const code = `
import { Badge, Button, CeStyleProvider } from '@cestyle/core';

function Demo() {
  return (
    <CeStyleProvider theme={{
      fontFamily: "'Inter', sans-serif"
      colors: {
        'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
        'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
      },
    }}>
      <Button color="ocean-blue">Ocean blue button</Button>
      <Badge color="bright-pink" variant="filled">Bright pink badge</Badge>
    </CeStyleProvider>
  );
}
`;

const useStyles = createStyles((theme) => ({
  prism: {
    '& pre': {
      backgroundColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white
      } !important`,
      borderRadius: theme.radius.md,
      padding: 14,
      paddingTop: 30,
      paddingBottom: 30,
    },

    '& .cestyle-ScrollArea-viewport': {
      borderRadius: theme.radius.md,
    },

    '& .cestyle-ScrollArea-root': {
      marginTop: theme.spacing.xl,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.md,
    },
  },
}));

export function ThemingDemo() {
  const theme = useCeStyleTheme();
  const { classes } = useStyles();

  return (
    <>
      <CeStyleProvider
        theme={{
          colorScheme: theme.colorScheme,
          fontFamily: "'Inter', sans-serif",
          colors: {
            'ocean-blue': [
              '#7AD1DD',
              '#5FCCDB',
              '#44CADC',
              '#2AC9DE',
              '#1AC2D9',
              '#11B7CD',
              '#09ADC3',
              '#0E99AC',
              '#128797',
              '#147885',
            ],
            'bright-pink': [
              '#F0BBDD',
              '#ED9BCF',
              '#EC7CC3',
              '#ED5DB8',
              '#F13EAF',
              '#F71FA7',
              '#FF00A1',
              '#E00890',
              '#C50E82',
              '#AD1374',
            ],
          },
        }}
      >
        <Group position="center">
          <Button color="ocean-blue">Ocean blue button</Button>
          <Badge color="bright-pink" variant="filled" size="lg" sx={{ lineHeight: 1 }}>
            Bright pink badge
          </Badge>
        </Group>
      </CeStyleProvider>

      <Prism noCopy language="tsx" className={classes.prism}>
        {code}
      </Prism>
    </>
  );
}
