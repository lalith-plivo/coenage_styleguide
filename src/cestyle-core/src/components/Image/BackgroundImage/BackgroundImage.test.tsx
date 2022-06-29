import { itSupportsSystemProps } from '@cestyle/tests';
import { BackgroundImage } from './BackgroundImage';

describe('@cestyle/core/BackgroundImage', () => {
  itSupportsSystemProps({
    component: BackgroundImage,
    props: { src: './image.png' },
    displayName: '@cestyle/core/BackgroundImage',
    refType: HTMLDivElement,
  });

  it('has correct displayName', () => {
    expect(BackgroundImage.displayName).toStrictEqual('@cestyle/core/BackgroundImage');
  });
});
