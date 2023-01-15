import React, { CSSProperties } from 'react';
import styles from './DateItem.module.scss';

type Props = {
  date: number;
  dateTime: string;
  name?: string;
  style?: CSSProperties;
};

const VDateItem = (props: Props) => {
  const { name, date, dateTime, style } = props;

  return (
    <div className={`${styles.date_item} ${name && styles.holiday}`} style={style}>
      <time dateTime={dateTime}>{date + 1}</time>
      {name && <span className={styles.name}>{name}</span>}
    </div>
  );
};

export default VDateItem;
