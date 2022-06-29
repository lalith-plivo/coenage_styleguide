import type { CSSProperties } from 'react';
import type { CeStyleSizes, CeStyleSize, CeStyleNumberSize } from './CeStyleSize';
import type { DeepPartial } from './DeepPartial';
import type { CeStyleThemeColors } from './CeStyleColor';
import type { VariantInput, VariantOutput } from '../functions/fns/variant/variant';
import type {
  VariantInput as ButtonVariantInput,
  VariantOutput as ButtonVariantOutput,
} from '../functions/fns/btnVariant/btnVariant';
import type { ColorScheme } from './ColorScheme';
import { CSSObject } from '../../tss';

export type LoaderType = 'bars' | 'oval' | 'dots';
export type CeStyleThemeOther = Record<string, any>;

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

type Shade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface CeStylePrimaryShade {
  light: Shade;
  dark: Shade;
}

interface CeStyleThemeFunctions {
  fontStyles(): any;
  focusStyles(): any;
  cover(offset?: number | string): any;
  themeColor(color: string, shade: number, primaryFallback?: boolean): string;
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  smallerThan(breakpoint: CeStyleNumberSize): string;
  largerThan(breakpoint: CeStyleNumberSize): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  radius(size: CeStyleNumberSize | (string & {})): string | number;
  variant(payload: VariantInput): VariantOutput;
  btnVariant(payload: ButtonVariantInput): ButtonVariantOutput;
  primaryShade(colorScheme?: ColorScheme): Shade;
  hover(hoverStyle: CSSObject): any;
}

export interface CeStyleTheme {
  dir: 'ltr' | 'rtl';
  primaryShade: Shade | CeStylePrimaryShade;
  focusRing: 'auto' | 'always' | 'never';
  defaultRadius: CeStyleNumberSize | (string & {});
  loader: LoaderType;
  dateFormat: string;
  colorScheme: ColorScheme;
  white: string;
  black: string;
  colors: CeStyleThemeColors;
  fontFamily: CSSProperties['fontFamily'];
  lineHeight: CSSProperties['lineHeight'];
  transitionTimingFunction: CSSProperties['transitionTimingFunction'];
  fontFamilyMonospace: CSSProperties['fontFamily'];
  primaryColor: keyof CeStyleThemeColors;

  fontSizes: CeStyleSizes;
  btnFontSizes: CeStyleSizes;
  radius: CeStyleSizes;
  spacing: CeStyleSizes;
  breakpoints: CeStyleSizes;
  shadows: Record<CeStyleSize, string>;

  headings: {
    fontFamily: CSSProperties['fontFamily'];
    fontWeight: CSSProperties['fontWeight'];
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  fontWeights: {
    bold: number;
    semibold: number;
    medium: number;
    regular: number;
  };

  fn: CeStyleThemeFunctions;
  other: CeStyleThemeOther;

  datesLocale: string;

  typography_light: string;
}

export type CeStyleThemeBase = Omit<CeStyleTheme, 'fn'>;
export type CeStyleThemeOverride = DeepPartial<Omit<CeStyleThemeBase, 'fn' | 'other'>> & {
  other?: CeStyleThemeOther;
};
