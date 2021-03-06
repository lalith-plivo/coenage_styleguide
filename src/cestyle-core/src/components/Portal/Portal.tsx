import React, { ReactPortal, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '@cestyle/hooks';
import { useCeStyleTheme, useCeStyleDefaultProps } from '@cestyle/styles';

export interface PortalProps {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Root element z-index property */
  zIndex?: number;

  /** Root element position property */
  position?: string;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLElement | string;

  /** Root element className */
  className?: string;
}

const defaultProps: Partial<PortalProps> = {
  zIndex: 1,
  position: 'relative',
};

export function Portal(props: PortalProps): ReactPortal {
  const { children, zIndex, target, className, position } = useCeStyleDefaultProps(
    'Portal',
    defaultProps,
    props
  );

  const theme = useCeStyleTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>();

  useIsomorphicEffect(() => {
    setMounted(true);
    ref.current = !target
      ? document.createElement('div')
      : typeof target === 'string'
      ? document.querySelector(target)
      : target;

    if (!target) {
      document.body.appendChild(ref.current);
    }

    return () => {
      !target && document.body.removeChild(ref.current);
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className={className} dir={theme.dir} style={{ position: position as any, zIndex }}>
      {children}
    </div>,
    ref.current
  );
}

Portal.displayName = '@cestyle/core/Portal';
