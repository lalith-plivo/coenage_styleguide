import type { CeStyleThemeBase } from '../../../types';

export function primaryShade(theme: CeStyleThemeBase) {
  return (colorScheme?: 'light' | 'dark') => {
    if (typeof theme.primaryShade === 'number') {
      return theme.primaryShade;
    }

    return theme.primaryShade[colorScheme || theme.colorScheme];
  };
}
