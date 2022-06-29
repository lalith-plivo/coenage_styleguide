import type { CeStyleNumberSize } from '@cestyle/styles';
import { createUseContext } from '../../utils';

interface GridContextValue {
  gutter: CeStyleNumberSize;
  grow: boolean;
  columns: number;
}

export const [GridProvider, useGridContext] = createUseContext<GridContextValue>(null);
