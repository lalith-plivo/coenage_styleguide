import React from 'react';
import { Photo } from 'tabler-icons-react';
import { CE_STYLES_COLORS, Group, ThemeIcon, ThemeIconProps } from '@cestyle/core';

const getThemes = (props?: ThemeIconProps) =>
  CE_STYLES_COLORS.map((color) => <ThemeIcon key={color} color={color} {...props} />);

function Demo() {
  return (
    <>
      <Group position="center">
        {getThemes({ children: <Photo size={16} />, variant: 'outline' })}
      </Group>

      <Group position="center" mt="md">
        {getThemes({ children: <Photo size={16} />, variant: 'light' })}
      </Group>

      <Group position="center" mt="md">
        {getThemes({ children: <Photo size={16} />, variant: 'filled' })}
      </Group>
    </>
  );
}

export const colors: CeStyleDemo = {
  type: 'demo',
  component: Demo,
};
