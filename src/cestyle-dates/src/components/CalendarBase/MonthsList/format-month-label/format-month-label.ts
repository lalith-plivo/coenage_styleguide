import dayjs from 'dayjs';
import { upperFirst } from '@cestyle/hooks';

interface FormatMonthLabel {
  month: Date;
  locale: string;
  format: string;
}

export function formatMonthLabel({ month, locale, format }: FormatMonthLabel) {
  return upperFirst(dayjs(month).locale(locale).format(format));
}
