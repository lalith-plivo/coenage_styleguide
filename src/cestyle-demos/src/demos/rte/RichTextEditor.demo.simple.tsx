import React, { useState } from 'react';
import { SSRWrapper } from './_SSRWrapper';

const code = `
import { useState } from 'react';
import { RichTextEditor } from '@cestyle/rte';

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function Demo() {
  const [value, onChange] = useState(initialValue);
  return <RichTextEditor value={value} onChange={onChange} />;
}
`;

const initialValue =
  '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

function Demo() {
  const [value, onChange] = useState(initialValue);
  return <SSRWrapper value={value} onChange={onChange} />;
}

export const simple: CeStyleDemo = {
  type: 'demo',
  component: Demo,
  code,
};
