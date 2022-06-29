import type { CeStyleThemeBase, CeStyleNumberSize } from '../../../types';

export function radius(theme: CeStyleThemeBase) {
  return (size: CeStyleNumberSize | (string & {})): string | number => {
    if (typeof size === 'number') {
      return size;
    }

    const defaultRadius =
      typeof theme.defaultRadius === 'number'
        ? theme.defaultRadius
        : theme.radius[theme.defaultRadius] || theme.defaultRadius;

    return theme.radius[size] || size || defaultRadius;
  };
}
