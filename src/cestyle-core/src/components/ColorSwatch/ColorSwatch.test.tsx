import { itIsPolymorphic, itSupportsSystemProps } from '@cestyle/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps<'div'> = {
  color: '#fff',
};

describe('@cestyle/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch, defaultProps);
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@cestyle/core/ColorSwatch',
    refType: HTMLDivElement,
  });
});
