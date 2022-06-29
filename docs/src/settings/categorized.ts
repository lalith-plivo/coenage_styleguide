import { CE_STYLES_CORE_CATEGORIES, CE_STYLES_CORE_ORDER } from './cestyle-core';
import { CE_STYLES_HOOKS_ORDER, CE_STYLES_HOOKS_CATEGORIES } from './cestyle-hooks';

export const CE_STYLES_HOOKS_CATEGORIZED = {
  group: 'cestyle-hooks',
  categories: CE_STYLES_HOOKS_CATEGORIES,
  order: CE_STYLES_HOOKS_ORDER,
};

export const CE_STYLES_CORE_CATEGORIZED = {
  group: 'cestyle-core',
  categories: CE_STYLES_CORE_CATEGORIES,
  order: CE_STYLES_CORE_ORDER,
};

export const CATEGORIZED = [
  { group: 'theming', categories: {}, order: [] },
  CE_STYLES_HOOKS_CATEGORIZED,
  { group: 'cestyle-form', categories: {}, order: [] },
  CE_STYLES_CORE_CATEGORIZED,
  { group: 'cestyle-dates', categories: {}, order: [] },
  { group: 'Other packages', categories: {}, order: [] },
  { group: 'changelog', categories: {}, order: [] },
];
