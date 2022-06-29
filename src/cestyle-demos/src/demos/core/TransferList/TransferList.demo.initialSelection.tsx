import React from 'react';
import { Wrapper } from './_wrapper';

const code = `
<TransferList initialSelection={[['react', 'ng'], []]} />
`;

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Frameworks', 'Libraries']}
      breakpoint="sm"
      initialSelection={[['react', 'ng'], []]}
    />
  );
}

export const initialSelection: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
