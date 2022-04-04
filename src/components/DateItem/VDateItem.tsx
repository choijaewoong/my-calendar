import React, { CSSProperties, FC } from 'react';
import styles from './DateItem.module.scss';

type Props = {
  date: number;
  dateTime: string;
  name?: string;
  style?: CSSProperties;
};

const VDateItem: FC<Props> = (props) => {
  const { name, date, dateTime, style } = props;

  return (
    <div className={styles.date_item} style={style}>
      <time dateTime={dateTime}>{date + 1}</time>
      {name && <span className={styles.name}>{name}</span>}
    </div>
  );
};

export default VDateItem;
