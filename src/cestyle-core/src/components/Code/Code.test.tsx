import React from 'react';
import { render } from '@testing-library/react';
import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { Code, CodeProps } from './Code';

const defaultProps: CodeProps = {
  children: 'test-code',
};

describe('@cestyle/core/Code', () => {
  itRendersChildren(Code, defaultProps);
  itSupportsSystemProps({
    component: Code,
    props: defaultProps,
    displayName: '@cestyle/core/Code',
    refType: HTMLElement,
  });

  it('renders code element for inline code and pre element for block', () => {
    const { container: inline } = render(<Code>Code</Code>);
    const { container: block } = render(<Code block>Code</Code>);
    expect(inline.querySelector('code')).toBeInTheDocument();
    expect(block.querySelector('pre')).toBeInTheDocument();
  });
});
