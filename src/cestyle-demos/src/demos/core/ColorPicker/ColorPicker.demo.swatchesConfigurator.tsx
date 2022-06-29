import React from 'react';
import { DEFAULT_THEME, ColorPicker, ColorPickerProps } from '@cestyle/core';

function Wrapper(props: ColorPickerProps) {
  return (
    <ColorPicker
      style={{ margin: 'auto' }}
      format="hex"
      defaultValue="rgba(50, 151, 194, 1)"
      swatches={Object.keys(DEFAULT_THEME.colors).map((color) => DEFAULT_THEME.colors[color][6])}
      {...props}
    />
  );
}

const codeTemplate = (props: string) => `
import { ColorPicker } from '@cestyle/core';

function Demo() {
  return (
    <ColorPicker${props} format="hex" swatches={[${Object.keys(DEFAULT_THEME.colors)
  .map((color) => `'${DEFAULT_THEME.colors[color][6]}'`)
  .join(', ')}]} />
  );
}
`;

export const swatchesConfigurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'swatchesPerRow', type: 'number', initialValue: 10, defaultValue: 10, min: 5, max: 20 },
  ],
};
