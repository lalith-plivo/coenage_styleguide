import { itSupportsSystemProps } from '@cestyle/tests';
import { ColorSlider, ColorSliderProps } from './ColorSlider';

const defaultProps: ColorSliderProps = {
  value: 25,
  onChange: () => {},
  size: 'sm',
  maxValue: 360,
  overlays: [{ color: 'red' }],
  round: true,
};

describe('@cestyle/core/ColorSlider', () => {
  itSupportsSystemProps({
    component: ColorSlider,
    props: defaultProps,
    displayName: '@cestyle/core/ColorSlider',
    refType: HTMLDivElement,
  });
});
