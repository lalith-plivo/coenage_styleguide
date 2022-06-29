import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import { DEFAULT_THEME } from './default-theme';
import { GlobalStyles } from './GlobalStyles';
import { CeStyleCssVariables } from './CeStyleCssVariables';
import type { CeStyleThemeOverride, CeStyleTheme } from './types';
import type { CSSObject } from '../tss';
import { mergeThemeWithFunctions } from './utils/merge-theme/merge-theme';
import { filterProps } from './utils/filter-props/filter-props';
import { NormalizeCSS } from './NormalizeCSS';

type ProviderStyles = Record<
  string,
  Record<string, CSSObject> | ((theme: CeStyleTheme, params: any) => Record<string, CSSObject>)
>;

type ProviderClassNames = Record<string, Record<string, string>>;
type CeStyleDefaultProps = Record<string, Record<string, any>>;

interface CeStyleProviderContextType {
  theme: CeStyleTheme;
  styles: ProviderStyles;
  classNames: ProviderClassNames;
  emotionOptions: EmotionCacheOptions;
  defaultProps: CeStyleDefaultProps;
}

const CeStyleProviderContext = createContext<CeStyleProviderContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  classNames: {},
  emotionOptions: { key: 'cestyle', prepend: true },
  defaultProps: {},
});

export function useCeStyleTheme() {
  return useContext(CeStyleProviderContext)?.theme || DEFAULT_THEME;
}

export function useCeStyleThemeStyles(component: string) {
  const ctx = useContext(CeStyleProviderContext);
  return { styles: ctx.styles[component] || {}, classNames: ctx.classNames[component] || {} };
}

export function useCeStyleEmotionOptions(): EmotionCacheOptions {
  return useContext(CeStyleProviderContext)?.emotionOptions || { key: 'cestyle', prepend: true };
}

export function useCeStyleDefaultProps<T extends Record<string, any>>(
  component: string,
  defaultProps: Partial<T>,
  props: T
): T {
  const contextProps = useContext(CeStyleProviderContext)?.defaultProps?.[component] || {};
  return { ...defaultProps, ...contextProps, ...filterProps(props) };
}

export interface CeStyleProviderProps {
  theme?: CeStyleThemeOverride;
  styles?: ProviderStyles;
  classNames?: ProviderClassNames;
  defaultProps?: CeStyleDefaultProps;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  withCSSVariables?: boolean;
  children: React.ReactNode;
  inherit?: boolean;
}

export function CeStyleProvider({
  theme,
  styles = {},
  classNames = {},
  defaultProps = {},
  emotionOptions,
  withNormalizeCSS = false,
  withGlobalStyles = false,
  withCSSVariables = false,
  inherit = false,
  children,
}: CeStyleProviderProps) {
  const ctx = useContext(CeStyleProviderContext);
  const overrides = {
    themeOverride: inherit ? { ...ctx.theme, ...theme } : theme,
    emotionOptions: inherit ? { ...ctx.emotionOptions, ...emotionOptions } : emotionOptions,
    styles: inherit ? { ...ctx.styles, ...styles } : styles,
    classNames: inherit ? { ...ctx.classNames, ...classNames } : classNames,
    defaultProps: inherit ? { ...ctx.defaultProps, ...defaultProps } : defaultProps,
  };

  const mergedTheme = mergeThemeWithFunctions(DEFAULT_THEME, overrides.themeOverride);

  return (
    <CeStyleProviderContext.Provider
      value={{
        theme: mergedTheme,
        styles: overrides.styles,
        classNames: overrides.classNames,
        emotionOptions: overrides.emotionOptions,
        defaultProps: overrides.defaultProps,
      }}
    >
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles theme={mergedTheme} />}
      {withCSSVariables && <CeStyleCssVariables theme={mergedTheme} />}
      {children}
    </CeStyleProviderContext.Provider>
  );
}

CeStyleProvider.displayName = '@cestyle/core/CeStyleProvider';
