import { itSupportsSystemProps } from '@cestyle/tests';
import { Table, TableProps } from './Table';

const defaultProps: TableProps = {};

describe('@cestyle/core/Table', () => {
  itSupportsSystemProps({
    component: Table,
    props: defaultProps,
    displayName: '@cestyle/core/Table',
    refType: HTMLTableElement,
  });
});
