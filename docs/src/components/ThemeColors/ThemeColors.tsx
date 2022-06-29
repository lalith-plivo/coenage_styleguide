import React from 'react';
import { useCeStyleTheme } from '@cestyle/core';
import { ColorsGroup } from './ColorsGroup';

export function ThemeColors() {
  const theme = useCeStyleTheme();
  const colors = ['info', 'danger', 'warning', 'success', 'neutral', 'brand'];
  const swatches = Object.keys(theme.colors)
    .filter((group) => colors.includes(group))
    .map((group) => <ColorsGroup group={group} key={group} />);

  return (
    <div style={{ marginTop: theme.spacing.xl, marginBottom: theme.spacing.xl }}>{swatches}</div>
  );
}
