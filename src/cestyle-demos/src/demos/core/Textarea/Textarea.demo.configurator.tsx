import { Textarea } from '@cestyle/core';

const codeTemplate = (props: string) => `
import { Textarea } from '@cestyle/core';

function Demo() {
  return (
    <Textarea
     ${props}
    />
  );
}
`;

export const configurator: CeStyleDemo = {
  type: 'configurator',
  component: Textarea,
  codeTemplate,
  configuratorProps: { multiline: 3 },
  configurator: [
    { name: 'placeholder', type: 'string', initialValue: 'Your comment' },
    {
      name: 'label',
      type: 'string',
      initialValue: 'Your comment',
    },
    {
      name: 'description',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'error',
      type: 'string',
      initialValue: '',
    },
    {
      name: 'variant',
      type: 'select',
      data: [
        { label: 'default', value: 'default' },
        { label: 'filled', value: 'filled' },
        { label: 'unstyled', value: 'unstyled' },
      ],
      initialValue: 'default',
      defaultValue: 'default',
    },

    { name: 'disabled', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'required',
      type: 'boolean',
      initialValue: true,
      defaultValue: false,
    },
  ],
};
