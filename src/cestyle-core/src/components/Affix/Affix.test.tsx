import { itSupportsRef, itRendersChildren } from '@cestyle/tests';
import { Affix, AffixProps } from './Affix';

const defaultProps: AffixProps = {};

describe('@cestyle/core/Affix', () => {
  itSupportsRef(Affix, defaultProps, HTMLDivElement);
  itRendersChildren(Affix, defaultProps);

  it('has correct displayName', () => {
    expect(Affix.displayName).toStrictEqual('@cestyle/core/Affix');
  });
});
