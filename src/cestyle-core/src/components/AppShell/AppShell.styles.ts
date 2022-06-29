import { createStyles, CeStyleNumberSize, CeStyleTheme, CSSObject } from '@cestyle/styles';

export interface AppShellStylesParams {
  padding: CeStyleNumberSize;
  fixed: boolean;
  navbarOffsetBreakpoint: CeStyleNumberSize;
  asideOffsetBreakpoint: CeStyleNumberSize;
}

function getPositionStyles(props: AppShellStylesParams, theme: CeStyleTheme): CSSObject {
  const padding = theme.fn.size({ size: props.padding, sizes: theme.spacing });

  const navbarOffset = props.navbarOffsetBreakpoint
    ? theme.fn.size({ size: props.navbarOffsetBreakpoint, sizes: theme.breakpoints })
    : null;

  const asideOffset = props.asideOffsetBreakpoint
    ? theme.fn.size({ size: props.asideOffsetBreakpoint, sizes: theme.breakpoints })
    : null;

  if (!props.fixed) {
    return { padding };
  }

  return {
    minHeight: '100vh',
    paddingTop: `calc(var(--cestyle-header-height, 0px) + ${padding}px)`,
    paddingBottom: `calc(var(--cestyle-footer-height, 0px) + ${padding}px)`,
    paddingLeft: `calc(var(--cestyle-navbar-width, 0px) + ${padding}px)`,
    paddingRight: `calc(var(--cestyle-aside-width, 0px) + ${padding}px)`,

    [`@media (max-width: ${navbarOffset}px)`]: {
      paddingLeft: padding,
    },

    [`@media (max-width: ${asideOffset}px)`]: {
      paddingRight: padding,
    },
  };
}

export default createStyles((theme, props: AppShellStylesParams) => ({
  root: {
    boxSizing: 'border-box',
  },

  body: {
    display: 'flex',
    boxSizing: 'border-box',
  },

  main: {
    flex: 1,
    width: '100vw',
    boxSizing: 'border-box',
    ...getPositionStyles(props, theme),
  },
}));
