import React, { forwardRef } from 'react';
import { getDefaultZIndex, useCeStyleDefaultProps } from '@cestyle/styles';
import { VerticalSection, VerticalSectionSharedProps } from '../VerticalSection/VerticalSection';

export interface HeaderProps
  extends VerticalSectionSharedProps,
    React.ComponentPropsWithoutRef<'nav'> {
  /** Header content */
  children: React.ReactNode;
}

const defaultProps: Partial<HeaderProps> = {
  fixed: false,
  position: { top: 0, left: 0, right: 0 },
  zIndex: getDefaultZIndex('app'),
};

export const Header = forwardRef<HTMLElement, HeaderProps>((props: HeaderProps, ref) => {
  const _props = useCeStyleDefaultProps('Header', defaultProps, props);
  return <VerticalSection section="header" __staticSelector="Header" {..._props} ref={ref} />;
});

Header.displayName = '@cestyle/core/Header';
