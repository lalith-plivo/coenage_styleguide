import React from 'react';
import type { RichTextEditorProps } from '@cestyle/rte';

export function SSRWrapper(props: RichTextEditorProps) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line import/extensions, global-require
    const { RichTextEditor } = require('@cestyle/rte');
    return <RichTextEditor {...props} />;
  }

  return null;
}
