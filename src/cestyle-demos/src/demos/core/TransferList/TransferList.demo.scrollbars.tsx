import React from 'react';
import { Wrapper } from './_wrapper';

const code = `
<TransferList listHeight={100} listComponent="div" {/* ...other props */} />
`;

function Demo() {
  return (
    <Wrapper
      searchPlaceholder="Search..."
      nothingFound="Nothing here"
      titles={['Frameworks', 'Libraries']}
      listHeight={100}
      breakpoint="sm"
      listComponent="div"
    />
  );
}

export const scrollbars: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
