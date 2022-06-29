import { itSupportsClassName, itSupportsStyle } from '@cestyle/tests';
import { Thumb, ThumbProps } from './Thumb';

const defaultProps: ThumbProps = {
  __staticSelector: 'Test',
  position: { x: 0.4, y: 0.5 },
  size: 'sm',
};

describe('@cestyle/core/Thumb', () => {
  itSupportsClassName(Thumb, defaultProps);
  itSupportsStyle(Thumb, defaultProps);

  it('has correct displayName', () => {
    expect(Thumb.displayName).toStrictEqual('@cestyle/core/Thumb');
  });
});
