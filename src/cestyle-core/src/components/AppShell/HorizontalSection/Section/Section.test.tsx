import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@cestyle/tests';
import { Section, SectionProps } from './Section';

const defaultProps: SectionProps<'div'> = {
  children: 'test-section',
};

describe('@cestyle/core/Section', () => {
  itRendersChildren(Section, defaultProps);
  itIsPolymorphic(Section, defaultProps);

  itSupportsSystemProps({
    component: Section,
    props: defaultProps,
    displayName: '@cestyle/core/Section',
    refType: HTMLDivElement,
  });
});
