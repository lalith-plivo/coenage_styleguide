/* eslint-disable no-console */
import React from 'react';
import type { SpotlightAction } from '@cestyle/spotlight';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@cestyle/spotlight';
import type { SpotlightAction } from '@cestyle/spotlight';

const actions: SpotlightAction[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    title: \`Action \${index}\`,
    onTrigger: () => console.log(\`Action \${index}\`),
  }));

function Demo() {
  return (
    <SpotlightProvider
      actions={actions}
      limit={7}
      searchPlaceholder="Search..."
      shortcut="mod + shift + H"
    >
      <YourApp />
    </SpotlightProvider>
  );
}
`;

const actions: SpotlightAction[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    title: `Action ${index}`,
    onTrigger: () => console.log(`Action ${index}`),
  }));

function Demo() {
  return (
    <Wrapper
      actions={actions}
      limit={7}
      searchPlaceholder="Search..."
      shortcut="mod + shift + H"
      buttonLabel="Open spotlight with limit"
    />
  );
}

export const large: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
