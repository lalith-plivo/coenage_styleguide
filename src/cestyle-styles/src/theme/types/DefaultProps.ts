import type { CSSProperties } from 'react';
import type { CeStyleStyleSystemProps } from './CeStyleStyleSystem';
import type { CeStyleTheme } from './CeStyleTheme';
import type { CSSObject } from '../../tss';

export type Sx = CSSObject | ((theme: CeStyleTheme) => CSSObject);

export interface DefaultProps<T extends string = never> extends CeStyleStyleSystemProps {
  className?: string;
  style?: CSSProperties;
  sx?: Sx | (Sx | undefined)[];
  classNames?: Partial<Record<T, string>>;
  styles?: Partial<Record<T, CSSObject>> | ((theme: CeStyleTheme) => Partial<Record<T, CSSObject>>);
}
