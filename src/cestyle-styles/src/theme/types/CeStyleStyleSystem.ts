import type { CeStyleNumberSize } from './CeStyleSize';

type CeStyleStyleSystemValue = CeStyleNumberSize | (string & {});

export interface CeStyleStyleSystemProps {
  m?: CeStyleStyleSystemValue;
  my?: CeStyleStyleSystemValue;
  mx?: CeStyleStyleSystemValue;
  mt?: CeStyleStyleSystemValue;
  mb?: CeStyleStyleSystemValue;
  ml?: CeStyleStyleSystemValue;
  mr?: CeStyleStyleSystemValue;

  p?: CeStyleStyleSystemValue;
  py?: CeStyleStyleSystemValue;
  px?: CeStyleStyleSystemValue;
  pt?: CeStyleStyleSystemValue;
  pb?: CeStyleStyleSystemValue;
  pl?: CeStyleStyleSystemValue;
  pr?: CeStyleStyleSystemValue;
}

export type CeStyleStyleSystemSize = keyof CeStyleStyleSystemProps;
