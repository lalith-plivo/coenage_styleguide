import { PinInput } from '@cestyle/labs';

const codeTemplate = (props: string) => `<PasswordInput
 ${props}
/>`;

export const focus: CeStyleDemo = {
  type: 'configurator',
  component: PinInput,
  codeTemplate,
  configuratorProps: { multiline: true },
  configurator: [{ name: 'manageFocus', type: 'boolean', initialValue: true }],
};
