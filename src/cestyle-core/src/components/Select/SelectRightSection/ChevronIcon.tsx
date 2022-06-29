import React from 'react';
import { useCeStyleTheme, DefaultProps } from '@cestyle/styles';

interface ChevronIconProps extends DefaultProps, React.ComponentPropsWithoutRef<'svg'> {
  error: any;
}

export function ChevronIcon({ error, style, ...others }: ChevronIconProps) {
  const theme = useCeStyleTheme();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      style={{ color: error ? theme.colors.danger[1] : theme.typography_light, ...style }}
      data-chevron
      {...others}
    >
      <path
        stroke={theme.typography_light}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.834 7.5L10 13.333 4.167 7.5"
      />
    </svg>
  );
}
