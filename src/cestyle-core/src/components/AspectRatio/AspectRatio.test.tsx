import { itRendersChildren, itSupportsSystemProps } from '@cestyle/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@cestyle/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@cestyle/core/AspectRatio',
    refType: HTMLDivElement,
  });
});
