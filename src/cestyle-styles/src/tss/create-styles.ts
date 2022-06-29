import type { CeStyleTheme } from '../theme';
import type { CSSObject } from './types';
import { fromEntries } from './utils/from-entries/from-entries';
import { useCss } from './use-css';
import { useCeStyleTheme, useCeStyleThemeStyles } from '../theme/CeStyleProvider';
import { mergeClassNames } from './utils/merge-class-names/merge-class-names';

export interface UseStylesOptions<Key extends string> {
  classNames?: Partial<Record<Key, string>>;
  styles?:
    | Partial<Record<Key, CSSObject>>
    | ((theme: CeStyleTheme) => Partial<Record<Key, CSSObject>>);
  name: string;
}

export function createStyles<Key extends string = string, Params = void>(
  getCssObjectOrCssObject:
    | ((
        theme: CeStyleTheme,
        params: Params,
        createRef: (refName: string) => string
      ) => Record<Key, CSSObject>)
    | Record<Key, CSSObject>
) {
  const getCssObject =
    typeof getCssObjectOrCssObject === 'function'
      ? getCssObjectOrCssObject
      : () => getCssObjectOrCssObject;

  function useStyles(params: Params, options?: UseStylesOptions<Key>) {
    const theme = useCeStyleTheme();
    const { styles: themeStyles, classNames: themeClassNames } = useCeStyleThemeStyles(
      options?.name
    );

    const { css, cx } = useCss();

    function createRef(refName: string) {
      return `__cestyle-ref-${refName || ''}`;
    }

    const cssObject = getCssObject(theme, params, createRef);

    const _styles =
      typeof options?.styles === 'function' ? options?.styles(theme) : options?.styles || {};
    const _themeStyles =
      typeof themeStyles === 'function' ? themeStyles(theme, params || {}) : themeStyles || {};

    const classes = fromEntries(
      Object.keys(cssObject).map((key) => {
        const mergedStyles = cx(css(cssObject[key]), css(_themeStyles[key]), css(_styles[key]));
        return [key, mergedStyles];
      })
    ) as Record<Key, string>;

    return {
      classes: mergeClassNames(cx, classes, themeClassNames, options?.classNames, options?.name),
      cx,
      theme,
    };
  }

  return useStyles;
}
