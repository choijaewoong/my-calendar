import React, { FC } from 'react';
import MonthItem from '../MonthItem/MonthItem';
import styles from './Calendar.module.scss';

type Props = {
  year: number;
};

const Calendar: FC<Props> = (props) => {
  const monthArray = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <>
      {monthArray.map((month, idx) => (
        <MonthItem key={idx} month={month} {...props} />
      ))}
    </>
  );
};

export default Calendar;
