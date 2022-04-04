import React, { CSSProperties, FC } from 'react';
import styles from './MonthItem.module.scss';
import DateItem from '../DateItem/DateItem';
import { Holiday } from '../../types/holiday';

type Props = {
  year: number;
  month: number;
};

const MonthItem: FC<Props> = (props) => {
  const { year, month } = props;
  const lastDate = new Date(year, month, 0).getDate();

  return (
    <div className={styles.month_wrap}>
      <div className={styles.month_header}>
        <em>{month}</em>
      </div>
      <div className={styles.day_area}>
        <span className={styles.day}>Sun</span>
        <span className={styles.day}>Mon</span>
        <span className={styles.day}>Tue</span>
        <span className={styles.day}>Wed</span>
        <span className={styles.day}>Thu</span>
        <span className={styles.day}>Fri</span>
        <span className={styles.day}>Sat</span>
      </div>
      <div className={styles.date_area}>
        {[...Array(lastDate)].map((_, date) => (
          <DateItem key={date} date={date} {...props} />
        ))}
      </div>
    </div>
  );
};

export default MonthItem;
