import React from 'react';
import { useCeStyleTheme } from '@cestyle/core';
import { DatePicker } from '@cestyle/dates';

const code = `
import { useCeStyleTheme } from '@cestyle/core';
import { DatePicker } from '@cestyle/dates';

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      dayStyle={(date) =>
        date.getDay() === 5 && date.getDate() === 13
          ? { backgroundColor: theme.colors.red[9], color: theme.white }
          : null
      }
    />
  );
}
`;

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        dayStyle={(date) =>
          date.getDay() === 5 && date.getDate() === 13
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : null
        }
      />
    </div>
  );
}

export const styles: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
