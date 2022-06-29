import React from 'react';
import { InputWrapper, SegmentedControl as CeStyleSegmentedControl } from '@cestyle/core';
import { upperFirst } from '@cestyle/hooks';

interface SizeControlProps {
  value: string;
  label: string;
  onChange(value: string): void;
  data: { value: string; label: string }[];
}

export function SegmentedControl({ value, label, onChange, data, ...others }: SizeControlProps) {
  return (
    <InputWrapper labelElement="div" label={upperFirst(label)} {...others}>
      <CeStyleSegmentedControl
        data={data.map((item) => ({ value: item.value, label: upperFirst(item.label) }))}
        value={value}
        onChange={onChange}
        fullWidth
        transitionDuration={150}
        transitionTimingFunction="ease"
      />
    </InputWrapper>
  );
}

SegmentedControl.initialValue = '';
