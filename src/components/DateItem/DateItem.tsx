import React, { CSSProperties, FC } from 'react';
import VDateItem from './VDateItem';
import { Holiday } from '../../types/holiday';

type Props = {
  year: number;
  month: number;
  date: number;
  holidayList: Holiday[];
};

const DateItem: FC<Props> = (props) => {
  const { year, month, date, holidayList } = props;

  const handleDateStyle = () => {
    const style = {} as CSSProperties;
    const dayNum = new Date(year, month - 1, 1).getDay();

    if (date === 0) style.gridColumn = dayNum + 1;
    if ((date + dayNum + 1) % 7 === 0) style.color = '#0074bc';
    if ((date + dayNum) % 7 === 0) style.color = '#e03563';
    return style;
  };

  const getName = () => {
    const name = holidayList.find((e) => {
      const holidayDate = `${year}-${String(month).padStart(2, '0')}-${String(date + 1).padStart(2, '0')}`;
      return e.date == holidayDate;
    })?.name;

    return name;
  };

  const newProps = {
    date,
    dateTime: `${year}-${month}-${date + 1}`,
    name: getName(),
    style: handleDateStyle(),
  };

  return <VDateItem {...newProps} />;
};

export default DateItem;
