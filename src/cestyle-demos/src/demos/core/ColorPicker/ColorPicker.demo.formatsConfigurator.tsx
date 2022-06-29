import React, { useState } from 'react';
import { Group, Text, ColorPicker, ColorPickerProps } from '@cestyle/core';

function Wrapper(props: ColorPickerProps) {
  const [value, onChange] = useState('#C5D899');

  return (
    <Group position="center" direction="column">
      <ColorPicker value={value} onChange={onChange} {...props} />
      <Text>{value}</Text>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { ColorPicker } from '@cestyle/core';

function Demo() {
  return <ColorPicker${props} />;
}
`;

export const formatsConfigurator: CeStyleDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    {
      name: 'format',
      type: 'select',
      initialValue: 'hex',
      defaultValue: 'hex',
      data: [
        { value: 'hex', label: 'HEX' },
        { value: 'rgb', label: 'RGB' },
        { value: 'rgba', label: 'RGBA' },
        { value: 'hsl', label: 'HSL' },
        { value: 'hsla', label: 'HSLA' },
      ],
    },
  ],
};
