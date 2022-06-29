import React from 'react';
import { Group, useCeStyleTheme } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

const code = `
import { useCeStyleTheme } from '@cestyle/core';
import { Calendar } from '@cestyle/dates';

function Demo() {
  const theme = useCeStyleTheme();

  return (
    <Calendar
      initialMonth={new Date(2021, 7)}
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
    <Group position="center">
      <Calendar
        initialMonth={new Date(2021, 7)}
        dayStyle={(date) =>
          date.getDay() === 5 && date.getDate() === 13
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : null
        }
      />
    </Group>
  );
}

export const styles: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
