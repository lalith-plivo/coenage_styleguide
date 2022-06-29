import { itSupportsSystemProps } from '@cestyle/tests';
import { RangeCalendar, RangeCalendarProps } from './RangeCalendar';

const defaultProps: RangeCalendarProps = {
  month: new Date(),
  value: [new Date(), new Date()] as [Date, Date],
  onChange: () => {},
};

describe('@cestyle/dates/RangeCalendar', () => {
  itSupportsSystemProps({
    component: RangeCalendar,
    props: defaultProps,
    displayName: '@cestyle/dates/RangeCalendar',
    refType: HTMLDivElement,
  });
});
