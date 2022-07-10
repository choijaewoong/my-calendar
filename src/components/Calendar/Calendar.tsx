import React, { FC } from 'react';
import MonthItem from '../MonthItem/MonthItem';
import styles from './Calendar.module.scss';

const Calendar: FC = () => {
  const monthArray = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className={styles.calendar_wrap}>
      {monthArray.map((month, idx) => (
        <MonthItem key={idx} month={month} />
      ))}
    </div>
  );
};

export default Calendar;
