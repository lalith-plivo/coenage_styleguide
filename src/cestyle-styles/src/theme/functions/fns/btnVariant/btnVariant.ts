import type { CeStyleColor, CeStyleGradient, CeStyleThemeBase } from '../../../types';
import { rgba } from '../rgba/rgba';
import { themeColor } from '../theme-color/theme-color';
import { primaryShade } from '../primary-shade/primary-shade';

export interface VariantInput {
  variant: 'filled' | 'light' | 'outline' | 'default' | 'gradient' | 'white' | 'subtle';
  color?: CeStyleColor;
  gradient?: CeStyleGradient;
}

export interface VariantOutput {
  border: string;
  background: string;
  color: string;
  hover: string;
}

export function btnVariant(theme: CeStyleThemeBase) {
  const getThemeColor = themeColor(theme);
  const getPrimaryShade = primaryShade(theme);
  // eslint-disable-next-line @typescript-eslint/no-shadow
  return ({ variant, color }: VariantInput): VariantOutput => {
    if (variant === 'light') {
      return {
        border: 'transparent',
        background: rgba(getThemeColor(color, 0), 1),
        color: getThemeColor(color, getPrimaryShade('light')),
        hover: rgba(getThemeColor(color, 0), 0.35),
      };
    }

    if (variant === 'default') {
      return {
        border: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
        background: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        hover: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
      };
    }

    if (variant === 'white') {
      return {
        border: 'transparent',
        background: theme.white,
        color: getThemeColor(color, getPrimaryShade()),
        hover: null,
      };
    }

    if (variant === 'outline') {
      return {
        border: getThemeColor(
          color,
          theme.colorScheme === 'dark' ? getPrimaryShade('light') : getPrimaryShade('light')
        ),
        background: 'transparent',
        color: getThemeColor(
          color,
          theme.colorScheme === 'dark' ? getPrimaryShade('light') : getPrimaryShade('light')
        ),
        hover:
          theme.colorScheme === 'dark'
            ? rgba(getThemeColor(color, 4), 0.05)
            : rgba(getThemeColor(color, 0), 0.35),
      };
    }
    if (variant === 'subtle') {
      return {
        border: 'transparent',
        background: 'transparent',
        color:
          color === 'dark'
            ? theme.colorScheme === 'dark'
              ? theme.colors.dark[0]
              : theme.colors.dark[9]
            : getThemeColor(color, theme.colorScheme === 'dark' ? 2 : getPrimaryShade('light')),
        hover: rgba(
          getThemeColor(color, theme.colorScheme === 'dark' ? 8 : 0),
          theme.colorScheme === 'dark' ? 0.35 : 1
        ),
      };
    }

    if (variant === 'filled') {
      return {
        border: 'transparent',
        background: getThemeColor(color, getPrimaryShade()),
        color: theme.white,
        hover: theme.colors.brand[2],
      };
    }
    return {
      border: 'transparent',
      background: getThemeColor(color, getPrimaryShade()),
      color: theme.white,
      hover: getThemeColor(color, getPrimaryShade() === 9 ? 8 : getPrimaryShade() + 1),
    };
  };
}
