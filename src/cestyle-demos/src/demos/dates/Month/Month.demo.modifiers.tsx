import React from 'react';
import { Group, createStyles } from '@cestyle/core';
import { Month } from '@cestyle/dates';

const code = `
import { createStyles } from '@cestyle/core';
import { Month } from '@cestyle/dates';

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: \`\${theme.colors.brand[2]} !important\`,
  },
}));

function Demo() {
  const { classes, cx } = useStyles();

  return (
    <Month
      disableOutsideEvents
      month={new Date(2021, 7)}
      dayClassName={(date, modifiers) =>
        cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
      }
    />
  );
}
`;

const useStyles = createStyles((theme) => ({
  outside: {
    opacity: 0,
  },

  weekend: {
    color: `${theme.colors.brand[2]} !important`,
  },
}));

function Demo() {
  const { classes, cx } = useStyles();

  return (
    <Group position="center">
      <Month
        disableOutsideEvents
        month={new Date(2021, 7)}
        dayClassName={(date, modifiers) =>
          cx({ [classes.outside]: modifiers.outside, [classes.weekend]: modifiers.weekend })
        }
      />
    </Group>
  );
}

export const modifiers: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
