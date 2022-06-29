import React from 'react';
import { render } from '@testing-library/react';
import { itSupportsSystemProps } from '@cestyle/tests';
import { ListItem, ListItemProps } from './ListItem';

const defaultProps: ListItemProps = {
  icon: '$',
  children: 'test-list-item',
};

describe('@cestyle/core/ListItem', () => {
  itSupportsSystemProps({
    component: ListItem,
    props: defaultProps,
    displayName: '@cestyle/core/ListItem',
  });

  it('renders icon based on prop', () => {
    const { container: withIcon } = render(<ListItem icon="$">test-item</ListItem>);
    const { container: withoutIcon } = render(<ListItem>test-item</ListItem>);
    expect(withIcon.querySelectorAll('.cestyle-List-itemIcon')).toHaveLength(1);
    expect(withoutIcon.querySelectorAll('.cestyle-List-itemIcon')).toHaveLength(0);
  });
});
