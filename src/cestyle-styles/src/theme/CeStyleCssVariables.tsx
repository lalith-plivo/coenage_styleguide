import React from 'react';
import { Global } from '@emotion/react';
import type { CeStyleTheme, CeStyleSize } from './types';

function assignSizeVariables(
  variables: Record<string, string>,
  sizes: Record<CeStyleSize, number | string>,
  name: string
) {
  Object.keys(sizes).forEach((size) => {
    // eslint-disable-next-line no-param-reassign
    variables[`--cestyle-${name}-${size}`] =
      typeof sizes[size] === 'number' ? `${sizes[size]}px` : sizes[size];
  });
}

export function CeStyleCssVariables({ theme }: { theme: CeStyleTheme }) {
  const variables: Record<string, string> = {
    '--cestyle-color-white': theme.white,
    '--cestyle-color-black': theme.black,
    '--cestyle-transition-timing-function': theme.transitionTimingFunction,
    '--cestyle-line-height': `${theme.lineHeight}`,
    '--cestyle-font-family': theme.fontFamily,
    '--cestyle-font-family-monospace': theme.fontFamilyMonospace,
    '--cestyle-font-family-headings': theme.headings.fontFamily,
    '--cestyle-heading-font-weight': `${theme.headings.fontWeight}`,
  };

  assignSizeVariables(variables, theme.shadows, 'shadow');
  assignSizeVariables(variables, theme.fontSizes, 'font-size');
  assignSizeVariables(variables, theme.radius, 'radius');
  assignSizeVariables(variables, theme.spacing, 'spacing');

  Object.keys(theme.colors).forEach((color) => {
    theme.colors[color].forEach((shade, index) => {
      variables[`--cestyle-color-${color}-${index}`] = shade;
    });
  });

  const headings = theme.headings.sizes;

  Object.keys(headings).forEach((heading) => {
    variables[`--cestyle-${heading}-font-size`] = `${headings[heading].fontSize}px`;
    variables[`--cestyle-${heading}-line-height`] = `${headings[heading].lineHeight}`;
  });

  return (
    <Global
      styles={{
        ':root': variables,
      }}
    />
  );
}
