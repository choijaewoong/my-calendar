import React, { FC } from 'react';
import MonthItem from '../MonthItem/MonthItem';
import styles from './Calendar.module.scss';

type Props = {
  type?: '' | 'type_vertical';
};

const Calendar: FC<Props> = (props) => {
  const { type } = props;
  const monthArray = Array.from({ length: type == 'type_vertical' ? 6 : 12 }, (_, i) => i + 1);

  const MonthList = (
    <>
      {type === 'type_vertical'
        ? monthArray.map((month, idx) => (
            <div key={idx} className={styles.month_multi}>
              <MonthItem month={month * 2 - 1} />
              <MonthItem month={month * 2} />
            </div>
          ))
        : monthArray.map((month, idx) => <MonthItem key={idx} month={month} />)}
    </>
  );

  return <div className={styles.calendar_wrap}>{MonthList}</div>;
};

export default Calendar;
