import React from 'react';
import { itSupportsClassName } from '@cestyle/tests';
import { MediaQuery, MediaQueryProps } from './MediaQuery';

const defaultProps: MediaQueryProps = {
  styles: { fontWeight: 700 },
  children: <span>test-children</span>,
};

describe('@cestyle/core/MediaQuery', () => {
  itSupportsClassName(MediaQuery, defaultProps);

  it('has correct displayName', () => {
    expect(MediaQuery.displayName).toStrictEqual('@cestyle/core/MediaQuery');
  });
});
