export const PACKAGES_DATA = [
  {
    package: '@cestyle/hooks',
    description: 'Hooks for state and UI management',
    dependencies: ['@cestyle/hooks'],
  },
  {
    package: '@cestyle/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
    dependencies: ['@cestyle/hooks', '@cestyle/core'],
  },
  {
    package: '@cestyle/form',
    description: 'Form management library',
    dependencies: ['@cestyle/form'],
  },
  {
    package: '@cestyle/dates',
    description: 'Date inputs, calendars',
    dependencies: ['@cestyle/hooks', '@cestyle/core', '@cestyle/dates', 'dayjs'],
  },
  {
    package: '@cestyle/notifications',
    description: 'Notifications system',
    dependencies: ['@cestyle/hooks', '@cestyle/core', '@cestyle/notifications'],
  },
  {
    package: '@cestyle/prism',
    description: 'Code highlight with your theme colors and styles',
    dependencies: ['@cestyle/hooks', '@cestyle/core', '@cestyle/prism'],
  },
  {
    package: '@cestyle/rte',
    description: 'Rich text editor based on Quill.js',
    dependencies: ['@cestyle/hooks', '@cestyle/core', '@cestyle/rte'],
  },
  {
    package: '@cestyle/dropzone',
    description: 'Capture files with drag and drop',
    dependencies: ['@cestyle/hooks', '@cestyle/core', '@cestyle/dropzone'],
  },
  {
    package: '@cestyle/modals',
    description: 'Centralized modals manager',
    dependencies: ['@cestyle/hooks', '@cestyle/core', '@cestyle/modals'],
  },
  {
    package: '@cestyle/spotlight',
    description: 'Overlay command center',
    dependencies: ['@cestyle/hooks', '@cestyle/core', '@cestyle/spotlight'],
  },
];
