/* eslint-disable no-console */
import React from 'react';
import { useForm } from '@cestyle/form';
import { Box, TextInput, NumberInput, Button, Group } from '@cestyle/core';

const code = `
import { useForm } from '@cestyle/form';
import { Box, TextInput, NumberInput, Button, Group } from '@cestyle/core';

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    initialValues: { name: '', age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
      age:
        values.age === undefined
          ? 'Age is required'
          : values.age < 18
          ? 'You must be at least 18'
          : null,
    }),
  });

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <NumberInput mt="sm" label="Age" placeholder="You age" {...form.getInputProps('age')} />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    initialValues: { name: '', age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
      age:
        values.age === undefined
          ? 'Age is required'
          : values.age < 18
          ? 'You must be at least 18'
          : null,
    }),
  });

  return (
    <Box sx={{ maxWidth: 340 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <NumberInput mt="sm" label="Age" placeholder="You age" {...form.getInputProps('age')} />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}

export const validateFunction: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
