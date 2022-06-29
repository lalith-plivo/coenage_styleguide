import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Collapse, CollapseProps } from './Collapse';

const defaultProps: CollapseProps = {
  in: true,
  children: <div style={{ height: '300px' }} />,
};

describe('@cestyle/core/Collapse', () => {
  itRendersChildren(Collapse, defaultProps);
  itSupportsSystemProps({
    component: Collapse,
    props: defaultProps,
    displayName: '@cestyle/core/Collapse',
  });
});
