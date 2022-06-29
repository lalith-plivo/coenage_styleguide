import React from 'react';
import { Search } from 'tabler-icons-react';
import { Wrapper } from './_wrapper';

const code = `
import { SpotlightProvider } from '@cestyle/spotlight';

function Demo() {
  return (
    <SpotlightProvider
      shortcut="mod + alt + L"
      highlightQuery
      {...otherProps}
    >
      <YourApp />
    </SpotlightProvider>
  );
}
`;

function Demo() {
  return (
    <Wrapper
      searchIcon={<Search size={18} />}
      searchPlaceholder="Search..."
      shortcut="mod + alt + L"
      highlightQuery
    />
  );
}

export const highlightQuery: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
