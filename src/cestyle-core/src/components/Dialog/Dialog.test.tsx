import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { itRendersChildren, itSupportsRef, itSupportsSystemProps } from '@cestyle/tests';
import { Dialog, CeStyleDialog, DialogProps } from './Dialog';

const defaultProps: DialogProps = {
  opened: true,
  transitionDuration: 0,
  withCloseButton: true,
};

describe('@cestyle/core/Dialog', () => {
  itRendersChildren(CeStyleDialog, defaultProps);
  itSupportsRef(Dialog, defaultProps, HTMLDivElement);
  itSupportsSystemProps({ component: CeStyleDialog, props: defaultProps });

  it('calls onClose when close button is clicked', () => {
    const spy = jest.fn();
    render(<CeStyleDialog opened withCloseButton onClose={spy} />);
    userEvent.click(screen.getByRole('button'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('has correct displayName', () => {
    expect(Dialog.displayName).toStrictEqual('@cestyle/core/Dialog');
  });
});
