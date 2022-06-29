import React from 'react';
import { Section } from '../Section/Section';
import { HooksDemo } from './HooksDemo';

export function Hooks() {
  return (
    <Section
      title="Hooks library"
      description={[
        'CeStyle comes with more than 30 hooks to manage state and UI to help you build custom components.',
        'All hooks that are used to build CeStyle components are exported from @cestyle/hooks package, hooks do not depend on components packages, you can use them independently in any react application.',
      ]}
    >
      <HooksDemo />
    </Section>
  );
}
