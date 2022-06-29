import { createStyles, CeStyleNumberSize } from '@cestyle/styles';
import { getSortedBreakpoints } from './get-sorted-breakpoints/get-sorted-breakpoints';

export interface SimpleGridBreakpoint {
  maxWidth?: CeStyleNumberSize;
  minWidth?: CeStyleNumberSize;
  cols: number;
  spacing?: CeStyleNumberSize;
}

export interface SimpleGridStylesParams {
  spacing: CeStyleNumberSize;
  breakpoints: SimpleGridBreakpoint[];
  cols: number;
}

export default createStyles((theme, { spacing, breakpoints, cols }: SimpleGridStylesParams) => {
  const gridBreakpoints = getSortedBreakpoints(theme, breakpoints).reduce((acc, breakpoint) => {
    const property = 'maxWidth' in breakpoint ? 'max-width' : 'min-width';
    const breakpointSize = theme.fn.size({
      size: property === 'max-width' ? breakpoint.maxWidth : breakpoint.minWidth,
      sizes: theme.breakpoints,
    });

    acc[`@media (${property}: ${breakpointSize + (property === 'max-width' ? 0 : 1)}px)`] = {
      gridTemplateColumns: `repeat(${breakpoint.cols}, minmax(0, 1fr))`,
      gap: theme.fn.size({
        size: breakpoint.spacing || spacing,
        sizes: theme.spacing,
      }),
    };

    return acc;
  }, {});

  return {
    root: {
      boxSizing: 'border-box',
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gap: theme.fn.size({ size: spacing, sizes: theme.spacing }),
      ...gridBreakpoints,
    },
  };
});
