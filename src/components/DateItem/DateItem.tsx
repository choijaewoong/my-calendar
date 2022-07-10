import React, { CSSProperties, FC, useMemo } from 'react';
import VDateItem from './VDateItem';
import { useYear } from '../../hooks/useCalendar';

type Props = {
  month: number;
  date: number;
};

const DateItem: FC<Props> = (props) => {
  const { month, date } = props;
  const { year, holidayList } = useYear();
  const dateTime = `${year}-${String(month).padStart(2, '0')}-${String(date + 1).padStart(2, '0')}`;

  const handleDateStyle = useMemo(() => {
    const style = {} as CSSProperties;
    const dayNum = new Date(year, month - 1, 1).getDay();

    if (date === 0) style.gridColumn = dayNum + 1;
    if ((date + dayNum + 1) % 7 === 0) style.color = '#0074bc';
    if ((date + dayNum) % 7 === 0) style.color = '#e03563';
    return style;
  }, [year, month, date]);

  const getName = useMemo(() => {
    const name = holidayList.find((e) => {
      return e.date == dateTime;
    })?.name;

    return name;
  }, [holidayList]);

  const newProps = {
    date,
    dateTime,
    name: getName,
    style: handleDateStyle,
  };

  return <VDateItem {...newProps} />;
};

export default DateItem;
