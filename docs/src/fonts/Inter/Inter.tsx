import React from 'react';
import { Global } from '@cestyle/core';
import regular from './Inter-Regular.woff2';
import medium from './Inter-Medium.woff2';
import semibold from './Inter-SemiBold.woff2';
import bold from './Inter-Bold.woff2';

export function InterFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${bold}') format("woff2")`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${semibold}') format("woff2")`,
            fontWeight: 600,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${medium}') format("woff2")`,
            fontWeight: 500,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            src: `url('${regular}') format("woff2")`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}
