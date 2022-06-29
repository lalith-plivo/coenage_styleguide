import type { CeStyleThemeBase } from '../../../types';
import type { CSSObject } from '../../../../tss';

export function fontStyles(theme: CeStyleThemeBase) {
  return (): CSSObject => ({ fontFamily: theme.fontFamily || 'sans-serif' });
}
