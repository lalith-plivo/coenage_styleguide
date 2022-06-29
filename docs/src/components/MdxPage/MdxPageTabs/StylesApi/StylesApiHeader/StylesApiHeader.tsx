import React from 'react';
import { Title, Text } from '@cestyle/core';
import { Prism } from '@cestyle/prism';
import { generateRootCode } from '../generate-styles-code';
import GatsbyLink from '../../../MdxProvider/GatsbyLink/GatsbyLink';

interface StylesApiHeaderProps {
  component: string;
  singleNode: boolean;
}

export function StylesApiHeader({ component, singleNode }: StylesApiHeaderProps) {
  return (
    <>
      <Title order={2} sx={{ fontWeight: 600 }} mb="md">
        {singleNode ? `${component} styles API` : 'CeStyle styles API'}
      </Title>

      {singleNode ? (
        <Text mb="md">
          {component} renders single node, use className, sx or style props to override styles:
        </Text>
      ) : (
        <Text sx={{ maxWidth: 600 }} mb={30}>
          CeStyle components support styling of individual elements by adding your classes or inline
          styles to any element inside component. For more information see{' '}
          <GatsbyLink to="/theming/styles-api/">styles API guide</GatsbyLink>.
        </Text>
      )}

      {!singleNode && (
        <Text weight="semibold" mb="md">
          Add styles to root element with className, style or sx:
        </Text>
      )}

      <Prism language="tsx">{generateRootCode(component)}</Prism>
    </>
  );
}
