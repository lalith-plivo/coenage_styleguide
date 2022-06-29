import { CeStyleSize, CeStyleTheme } from '@cestyle/styles';

type Breakpoints<T> = Partial<Record<CeStyleSize | (string & {}), T>>;

export function getSortedBreakpoints<T>(
  breakpoints: Breakpoints<T>,
  theme: CeStyleTheme
): [number, T][] {
  if (!breakpoints) {
    return [];
  }

  const values = Object.keys(breakpoints)
    .filter((breakpoint) => breakpoint !== 'base')
    .map((breakpoint) => [
      theme.fn.size({ size: breakpoint, sizes: theme.breakpoints }),
      breakpoints[breakpoint],
    ]);

  values.sort((a, b) => a[0] - b[0]);
  return values as [number, T][];
}
