import { createContext, useContext } from 'react';
import { CSSObject, CeStyleNumberSize, CeStyleTheme } from '@cestyle/styles';
import type { ListItemStylesNames } from './ListItem/ListItem';

interface ListContextValue {
  classNames?: Partial<Record<ListItemStylesNames, string>>;
  styles?:
    | Partial<Record<ListItemStylesNames, CSSObject>>
    | ((theme: CeStyleTheme) => Partial<Record<ListItemStylesNames, CSSObject>>);
  spacing?: CeStyleNumberSize;
  center?: boolean;
  icon?: React.ReactNode;
}

export const ListContext = createContext<ListContextValue>(null);

export function useListContext(): ListContextValue {
  return useContext(ListContext) || {};
}
