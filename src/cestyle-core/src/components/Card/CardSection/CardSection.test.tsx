import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@cestyle/tests';
import { CardSection, CardSectionProps } from './CardSection';

const defaultProps: CardSectionProps<'div'> = {};

describe('@cestyle/core/CardSection', () => {
  itRendersChildren(CardSection, defaultProps);
  itIsPolymorphic(CardSection, defaultProps);
  itSupportsSystemProps({
    component: CardSection,
    props: defaultProps,
    displayName: '@cestyle/core/CardSection',
    refType: HTMLDivElement,
  });
});
