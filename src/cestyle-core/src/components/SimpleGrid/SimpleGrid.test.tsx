import React from 'react';
import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { SimpleGrid, SimpleGridProps } from './SimpleGrid';

const defaultProps: SimpleGridProps = {
  cols: 2,
  children: <span>test</span>,
};

describe('@cestyle/core/SimpleGrid', () => {
  itRendersChildren(SimpleGrid, defaultProps);
  itSupportsSystemProps({
    component: SimpleGrid,
    props: defaultProps,
    displayName: '@cestyle/core/SimpleGrid',
    refType: HTMLDivElement,
  });
});
