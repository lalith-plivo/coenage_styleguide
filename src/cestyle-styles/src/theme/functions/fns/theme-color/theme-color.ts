import type { CeStyleThemeBase } from '../../../types';

export function themeColor(theme: CeStyleThemeBase) {
  return (color: string, shade: number, primaryFallback: boolean = true) => {
    const primaryShades = theme.colors[theme.primaryColor];
    return color in theme.colors
      ? theme.colors[color][shade]
      : primaryFallback
      ? primaryShades[shade]
      : color;
  };
}
