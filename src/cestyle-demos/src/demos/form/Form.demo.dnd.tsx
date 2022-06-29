import React from 'react';
import { Group, TextInput, Box, Text, Code, Button, Center } from '@cestyle/core';
import { useForm, formList } from '@cestyle/form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'tabler-icons-react';

const code = `
import { Group, TextInput, Box, Text, Code, Button, Center } from '@cestyle/core';
import { useForm, formList } from '@cestyle/form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'tabler-icons-react';

function Demo() {
  const form = useForm({
    initialValues: {
      employees: formList([
        { name: 'John Doe', email: 'john@cestyle.dev' },
        { name: 'Bill Love', email: 'bill@cestyle.dev' },
        { name: 'Nancy Eagle', email: 'nanacy@cestyle.dev' },
        { name: 'Lim Notch', email: 'lim@cestyle.dev' },
        { name: 'Susan Seven', email: 'susan@cestyle.dev' },
      ]),
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <GripVertical size={18} />
          </Center>
          <TextInput
            placeholder="John Doe"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <TextInput
            placeholder="example@mail.com"
            {...form.getListInputProps('employees', index, 'email')}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button onClick={() => form.addListItem('employees', { name: '', email: '' })}>
          Add employee
        </Button>
      </Group>

      <Text size="sm" weight="semibold" mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      employees: formList([
        { name: 'John Doe', email: 'john@cestyle.dev' },
        { name: 'Bill Love', email: 'bill@cestyle.dev' },
        { name: 'Nancy Eagle', email: 'nanacy@cestyle.dev' },
        { name: 'Lim Notch', email: 'lim@cestyle.dev' },
        { name: 'Susan Seven', email: 'susan@cestyle.dev' },
      ]),
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Draggable key={index} index={index} draggableId={index.toString()}>
      {(provided) => (
        <Group ref={provided.innerRef} mt="xs" {...provided.draggableProps}>
          <Center {...provided.dragHandleProps}>
            <GripVertical size={18} />
          </Center>
          <TextInput
            placeholder="John Doe"
            {...form.getListInputProps('employees', index, 'name')}
          />
          <TextInput
            placeholder="example@mail.com"
            {...form.getListInputProps('employees', index, 'email')}
          />
        </Group>
      )}
    </Draggable>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem('employees', { from: source.index, to: destination.index })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <Group position="center" mt="md">
        <Button onClick={() => form.addListItem('employees', { name: '', email: '' })}>
          Add employee
        </Button>
      </Group>

      <Text size="sm" weight="semibold" mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
}

export const dnd: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
