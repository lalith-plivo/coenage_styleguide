import React from 'react';
import { Global } from '@emotion/react';
import type { CeStyleTheme } from './types';

export function GlobalStyles({ theme }: { theme: CeStyleTheme }) {
  return (
    <Global
      styles={{
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          ...(theme.fn.fontStyles() as any),
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          lineHeight: theme.lineHeight,
          fontSize: theme.fontSizes.md,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      }}
    />
  );
}
