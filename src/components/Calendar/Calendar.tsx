import React, { FC } from 'react';
import MonthItem from '../MonthItem/MonthItem';
import { getHolidayList } from '../../hooks/useCalendar';
import styles from './Calendar.module.scss';

type Props = {
  year: number;
};

const Calendar: FC<Props> = (props) => {
  const { year } = props;
  const { isLoading, holidayList } = getHolidayList(year);
  const monthArray = Array.from({ length: 12 }, (_, i) => i + 1);

  const newProps = {
    year,
    holidayList: holidayList,
  };

  return (
    <>
      {isLoading ? 'loading...' : monthArray.map((month, idx) => <MonthItem key={idx} month={month} {...newProps} />)}
    </>
  );
};

export default Calendar;
