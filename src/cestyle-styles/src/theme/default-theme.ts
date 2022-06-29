import { CeStyleThemeBase } from './types';
import { DEFAULT_COLORS } from './default-colors';
import { attachFunctions } from './functions/attach-functions';

export const CE_STYLES_COLORS = Object.keys(DEFAULT_COLORS);
export const CE_STYLES_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const _DEFAULT_THEME: CeStyleThemeBase = {
  dir: 'ltr',
  primaryShade: {
    light: 3,
    dark: 3,
  },
  focusRing: 'auto',
  loader: 'oval',
  dateFormat: 'MMMM D, YYYY',
  colorScheme: 'light',
  white: '#fff',
  black: '#2C303A',
  defaultRadius: 0,
  transitionTimingFunction: 'ease',
  colors: DEFAULT_COLORS,
  lineHeight: 1.5,
  fontFamily: "'Inter',sans-serif, Apple Color Emoji, Segoe UI Emoji",
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  primaryColor: 'brand',

  shadows: {
    xs: '0px 1px 2px rgba(0, 0, 0, 0.08)',
    sm: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.05))',
    lg: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
  },

  btnFontSizes: {
    xs: 12,
    sm: 14,
    md: 14,
    lg: 16,
    xl: 16,
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },

  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 34,
  },

  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  },

  fontWeights: {
    bold: 700,
    semibold: 600,
    medium: 500,
    regular: 400,
  },

  headings: {
    fontFamily: "'Inter',sans-serif, Apple Color Emoji, Segoe UI Emoji",
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 64, lineHeight: 1.5 },
      h2: { fontSize: 40, lineHeight: 1.5 },
      h3: { fontSize: 24, lineHeight: 1.5 },
      h4: { fontSize: 18, lineHeight: 1.5 },
      h5: { fontSize: 16, lineHeight: 1.5 },
      h6: { fontSize: 14, lineHeight: 1.5 },
    },
  },

  other: {},
  datesLocale: 'en',
  typography_light: '#6B7280',
};

export const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);
