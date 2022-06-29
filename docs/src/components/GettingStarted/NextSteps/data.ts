import { BlendingModeIcon, StarFilledIcon } from '@modulz/radix-icons';
import { MarkGithubIcon } from '@primer/octicons-react';
import { DEFAULT_THEME } from '@cestyle/core';

export const NEXT_STEPS_DATA = [
  {
    title: 'Learn the basics',
    description:
      'Read a 5 minute tutorial to get an overview of all core features, please start your journey with CeStyle here',
    link: '/pages/basics/',
    type: 'gatsby',
    icon: StarFilledIcon,
    color: DEFAULT_THEME.colors.violet[6],
  },
  {
    title: 'Learn about theming',
    description:
      'Learn how to change colors, fonts, shadows, spacing and other theme values with CeStyleProvider',
    link: '/theming/cestyle-provider/',
    type: 'gatsby',
    icon: BlendingModeIcon,
    // color: DEFAULT_THEME.colors.pink[6],
  },
  {
    title: 'Explore source code',
    description:
      'CeStyle packages and documentation website is open source, if you like CeStyle please give us a star',
    link: 'https://github.com/cestyledev/cestyle',
    type: 'link',
    icon: MarkGithubIcon,
    color: '#000',
  },
];
