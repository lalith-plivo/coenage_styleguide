import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@cestyle/tests';
import { Pagination, PaginationProps } from './Pagination';

const defaultProps: PaginationProps = {
  total: 10,
  getItemAriaLabel: () => 'test-label',
};

describe('@cestyle/core/Pagination', () => {
  checkAccessibility([<Pagination {...defaultProps} />]);
  itSupportsSystemProps({
    component: Pagination,
    props: defaultProps,
    displayName: '@cestyle/core/Pagination',
    refType: HTMLDivElement,
  });
});
