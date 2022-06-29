import 'dayjs/locale/ru';
import React from 'react';
import { CeStyleProvider } from '@cestyle/core';
import { render, screen } from '@testing-library/react';
import { itSupportsSystemProps, itSupportsInputProps, itSupportsFocusEvents } from '@cestyle/tests';
import { DateRangePicker, DateRangePickerProps } from './DateRangePicker';

const defaultProps: DateRangePickerProps = {};

describe('@cestyle/dates/DateRangePicker', () => {
  itSupportsInputProps(DateRangePicker, defaultProps, 'DateRangePicker');
  itSupportsFocusEvents(DateRangePicker, defaultProps, 'input');
  itSupportsSystemProps({
    component: DateRangePicker,
    props: defaultProps,
    displayName: '@cestyle/dates/DateRangePicker',
    excludeOthers: true,
    refType: HTMLInputElement,
  });

  it('sets label on DatePickerBase based on inputFormat prop', () => {
    render(
      <DateRangePicker value={[new Date(2021, 6, 13), new Date(2021, 7, 13)]} inputFormat="MM/YY" />
    );
    expect(screen.getByRole('textbox')).toHaveValue('07/21 – 08/21');
  });

  it('uses locale provided in theme.datesLocale', () => {
    render(
      <CeStyleProvider theme={{ datesLocale: 'ru' }}>
        <DateRangePicker value={[new Date(2022, 0, 1), new Date(2022, 1, 20)]} />
      </CeStyleProvider>
    );
    expect(screen.getByRole('textbox')).toHaveValue('Январь 1, 2022 – Февраль 20, 2022');
  });
});
