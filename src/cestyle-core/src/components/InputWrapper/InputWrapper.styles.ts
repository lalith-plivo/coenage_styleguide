import { createStyles, CeStyleSize } from '@cestyle/styles';

export interface InputWrapperStylesParams {
  size: CeStyleSize;
}

export default createStyles((theme, {}: InputWrapperStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
  },

  label: {
    display: 'inline-block',
    fontSize: `${theme.fontSizes.sm}px`,
    fontWeight: theme.fontWeights.semibold,
    color: theme.colorScheme === 'dark' ? theme.black : theme.black,
    wordBreak: 'break-word',
    cursor: 'default',
    WebkitTapHighlightColor: 'transparent',
  },

  error: {
    marginTop: 8,
    wordBreak: 'break-word',
    color: theme.colors.danger[1],
  },

  description: {
    marginTop: 8,
    wordBreak: 'break-word',
    color: `${
      theme.colorScheme === 'dark' ? theme.typography_light : theme.typography_light
    } !important`,
    fontSize: `${theme.fontSizes.sm}px`,
    lineHeight: 1.5,
    fontWeight: theme.fontWeights.regular,
  },

  required: {
    color: theme.colors.danger[1],
  },
}));
