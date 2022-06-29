import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  '../src/cestyle-notifications/src/NotificationsProvider/NotificationsProvider.tsx',
  '../src/cestyle-core/src/Menu/MenuItem/MenuItem.tsx',
  '../src/cestyle-core/src/Menu/MenuLabel/MenuLabel.tsx',
  '../src/cestyle-core/src/RadioGroup/Radio/Radio.tsx',
  '../src/cestyle-core/src/components/Chips/Chip/Chip.tsx',
  '../src/cestyle-core/src/components/Timeline/TimelineItem/TimelineItem.tsx',
  '../src/cestyle-core/src/components/Slider/Slider/Slider.tsx',
  '../src/cestyle-core/src/components/Slider/RangeSlider/RangeSlider.tsx',
  '../src/cestyle-core/src/components/Stepper/Step/Step.tsx',
  '../src/cestyle-core/src/components/Avatar/AvatarsGroup/AvatarsGroup.tsx',
  '../src/cestyle-core/src/components/AppShell/Navbar/Navbar.tsx',
  '../src/cestyle-core/src/components/AppShell/Header/Header.tsx',
  '../src/cestyle-core/src/components/AppShell/Footer/Footer.tsx',
  '../src/cestyle-core/src/components/AppShell/Aside/Aside.tsx',
  '../src/cestyle-core/src/components/Grid/Col/Col.tsx',
  '../src/cestyle-prism/src/Prism.tsx',
  '../src/cestyle-spotlight/src/SpotlightProvider.tsx',
  '../src/cestyle-modals/src/ModalsProvider.tsx',
  '../src/cestyle-rte/src/components/RichTextEditor/RichTextEditor.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/cestyle-core/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/cestyle-dates/src/components') },
  { type: 'package', path: path.join(__dirname, '../src/cestyle-dropzone/src') },
  { type: 'package', path: path.join(__dirname, '../src/cestyle-labs/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
