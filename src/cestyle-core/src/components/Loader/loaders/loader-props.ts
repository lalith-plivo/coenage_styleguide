import React from 'react';
import type { CeStyleColor } from '@cestyle/styles';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number;
  color: CeStyleColor;
}
