import React from 'react';
import { NumberInput } from '@cestyle/core';

const code = `
import { NumberInput } from '@cestyle/core';

function Demo() {
  return (
    <NumberInput
      label="Price"
      defaultValue={1000}
      parser={(value) => value.replace(/\\$\\s?|(,*)/g, '')}
      formatter={(value) =>
        !Number.isNaN(parseFloat(value))
          ? \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')
          : '$ '
      }
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 420, margin: 'auto' }}>
      <NumberInput
        label="Price"
        defaultValue={1000}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value))
            ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : '$ '
        }
        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
      />
    </div>
  );
}

export const formatter: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
