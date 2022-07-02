import React, { FC } from 'react';
import MonthItem from '../MonthItem/MonthItem';
import { getHolidayList } from '../../hooks/useCalendar';
import styles from './Calendar.module.scss';
import { useYear } from '../../hooks/useCalendar';

const Calendar: FC = () => {
  const { year } = useYear();
  const { isLoading, holidayList } = getHolidayList(year);
  const monthArray = Array.from({ length: 12 }, (_, i) => i + 1);

  const newProps = {
    year,
    holidayList,
  };

  return (
    <div className={styles.calendar_wrap}>
      {isLoading ? 'loading...' : monthArray.map((month, idx) => <MonthItem key={idx} month={month} {...newProps} />)}
    </div>
  );
};

export default Calendar;
