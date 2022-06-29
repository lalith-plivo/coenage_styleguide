import { Tuple } from './Tuple';

export type DefaultCeStyleColor =
  | 'dark'
  | 'gray'
  | 'red'
  | 'pink'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'orange'
  | 'teal'
  | (string & {});

export type CeStyleThemeColorsOverride = {};

export type CeStyleThemeColors = CeStyleThemeColorsOverride extends {
  colors: Record<infer CustomColors, Tuple<string, 10>>;
}
  ? Record<CustomColors, Tuple<string, 10>>
  : Record<DefaultCeStyleColor, Tuple<string, 10>>;

export type CeStyleColor = keyof CeStyleThemeColors;
