import React from 'react';
import { Global as EmotionGlobal, css, CSSObject } from '@emotion/react';
import { useCeStyleTheme } from '../theme/CeStyleProvider';
import type { CeStyleTheme } from '../theme/types';

type EmotionStyles = CSSObject | CSSObject[];

interface GlobalStylesProps {
  styles: EmotionStyles | ((theme: CeStyleTheme) => EmotionStyles);
}

export function Global({ styles }: GlobalStylesProps) {
  const theme = useCeStyleTheme();
  return <EmotionGlobal styles={css(typeof styles === 'function' ? styles(theme) : styles)} />;
}
