import React from 'react';
import { Image, createStyles } from '@cestyle/core';
import image from './dark-theme-image.png';

const useStyles = createStyles((theme) => ({
  image: {
    boxShadow: theme.shadows.md,
  },
}));

export function DarkThemeDemo() {
  const { classes } = useStyles();
  return (
    <Image src={image as any} radius="md" className={classes.image} alt="CeStyle dark theme" />
  );
}
