import React from 'react';
import { CloseButton } from '../../ActionIcon/CloseButton/CloseButton';
import { ChevronIcon } from './ChevronIcon';

export interface SelectRightSectionProps {
  shouldClear: boolean;
  clearButtonLabel?: string;
  onClear?: () => void;
  // size: CeStyleSize;
  error?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  disabled?: boolean;
  clearButtonTabIndex?: number;
}

export function SelectRightSection({
  shouldClear,
  clearButtonLabel,
  onClear,
  error,
  clearButtonTabIndex,
}: SelectRightSectionProps) {
  return shouldClear ? (
    <CloseButton
      variant="transparent"
      aria-label={clearButtonLabel}
      onClick={onClear}
      tabIndex={clearButtonTabIndex}
    />
  ) : (
    <ChevronIcon error={error} />
  );
}

SelectRightSection.displayName = '@cestyle/core/SelectRightSection';
