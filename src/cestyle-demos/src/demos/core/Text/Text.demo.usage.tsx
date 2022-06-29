import React from 'react';
import { Text } from '@cestyle/core';

const code = `
import { Text } from '@cestyle/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Default text</Text>
      <Text size="md">Medium Text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text weight="bold">Bold</Text>
      <Text weight="semibold">Semibold</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="regular">Regular</Text>
      <Text underline>Underlined</Text>
      <Text variant="link" component="a" href="https://cestyle.dev">Link variant</Text>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="gray">Gray text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Default text</Text>
      <Text size="md">Medium Text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <br />

      <Text weight="bold">Bold</Text>
      <Text weight="semibold">Semibold</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="regular">Regular</Text>
      <br />

      <Text underline>Underlined</Text>
      <Text variant="link" component="a" href="https://cestyle.dev">
        Link variant
      </Text>
      <Text color="red">Red text</Text>
      <Text color="blue">Blue text</Text>
      <Text color="gray">Gray text</Text>
      <Text transform="uppercase">Uppercase</Text>
      <Text transform="capitalize">capitalized text</Text>
      <Text align="center">Aligned to center</Text>
      <Text align="right">Aligned to right</Text>
    </>
  );
}

export const usage: CeStyleDemo = {
  type: 'demo',
  code,
  component: Demo,
};
