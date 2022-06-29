import { itSupportsSystemProps } from '@cestyle/tests';
import { Calendar, CalendarProps } from './Calendar';

const defaultProps: CalendarProps = {
  month: new Date(),
  value: new Date(),
};

describe('@cestyle/dates/Calendar', () => {
  itSupportsSystemProps({
    component: Calendar,
    props: defaultProps,
    displayName: '@cestyle/dates/Calendar',
  });
});
