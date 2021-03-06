import React from 'react';
import { DEFAULT_THEME } from '@cestyle/core';

export const demoBase: Partial<CeStyleDemo> = {
  wrapper: ({ children }: { children: React.ReactNode }) => (
    <div style={{ maxWidth: 400, margin: 'auto' }}>{children}</div>
  ),
  background: (colorScheme) =>
    colorScheme === 'dark' ? DEFAULT_THEME.colors.dark[7] : DEFAULT_THEME.colors.gray[0],
};
