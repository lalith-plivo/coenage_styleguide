import { itSupportsSystemProps } from '@cestyle/tests';
import { RichTextEditor, RichTextEditorProps } from './RichTextEditor';

const defaultProps: RichTextEditorProps = {
  value: '',
  onChange: () => {},
};

describe('@cestyle/core/RichTextEditor', () => {
  itSupportsSystemProps({
    component: RichTextEditor,
    props: defaultProps,
    displayName: '@cestyle/rte/RichTextEditor',
  });
});
