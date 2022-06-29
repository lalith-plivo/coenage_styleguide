import type { CeStyleThemeBase, CeStyleNumberSize } from '../../../types';
import { size } from '../size/size';

export function largerThan(theme: CeStyleThemeBase) {
  return (breakpoint: CeStyleNumberSize) =>
    `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
}

export function smallerThan(theme: CeStyleThemeBase) {
  return (breakpoint: CeStyleNumberSize) =>
    `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
}
