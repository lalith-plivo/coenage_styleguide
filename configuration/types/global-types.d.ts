type CeStyleDemoControlType =
  | 'boolean'
  | 'color'
  | 'select'
  | 'string'
  | 'size'
  | 'number'
  | 'segmented';

interface CeStyleDemoControlProps {
  type: CeStyleDemoControlType;
  name: string;
  label?: string;
  initialValue?: any;
  defaultValue?: any;
  capitalize?: boolean;
  data?: { label: string; value: string }[];
  min?: number;
  max?: number;
  step?: number;
}

interface CeStyleDemoBase {
  component?: React.FC;
  wrapper?: React.FC;
  code?: string;
  background?: (colorScheme: 'light' | 'dark') => string;
}

interface CeStyleCodeDemo extends CeStyleDemoBase {
  type: 'demo';
  demoProps?: {
    spacing?: boolean;
    demoBackground?: string;
    toggle?: boolean;
    githubLink?: string;
    inline?: boolean;
  };
}

interface CeStyleConfiguratorDemo extends CeStyleDemoBase {
  type: 'configurator';
  codeTemplate(props: string, children?: string): string;
  configurator?: CeStyleDemoControlProps[];
  configuratorProps?: {
    previewBackground?: string;
    multiline?: boolean | number;
    includeCode?: boolean;
    filter?: string[];
    center?: boolean;
  };
}

type CeStyleDemo = CeStyleCodeDemo | CeStyleConfiguratorDemo;
