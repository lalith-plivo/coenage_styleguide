import { itSupportsSystemProps } from '@cestyle/tests';
import { TransferList, TransferListProps } from './TransferList';

const defaultProps: TransferListProps = {
  onChange: () => {},
  titles: ['test-1', 'test-2'],
  value: [
    [
      { value: 'react', label: 'React' },
      { value: 'ng', label: 'Angular' },
      { value: 'next', label: 'Next.js' },
    ],
    [
      { value: 'sv', label: 'Svelte' },
      { value: 'rw', label: 'Redwood' },
    ],
  ],
};

describe('@cestyle/core/TransferList', () => {
  itSupportsSystemProps({
    component: TransferList,
    props: defaultProps,
    displayName: '@cestyle/core/TransferList',
    refType: HTMLDivElement,
  });
});
