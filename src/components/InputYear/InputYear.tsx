import React, { FC, ChangeEvent } from 'react';
import styles from './InputYear.module.scss';

type Props = {
  year: number;
  handleYear: (e: ChangeEvent<HTMLInputElement>) => void;
};
const InputYear: FC<Props> = (props) => {
  const { year, handleYear } = props;
  return (
    <div className={styles.input_wrap}>
      <input
        className={styles.input_year}
        type="number"
        name="year"
        placeholder="Year"
        value={year}
        onChange={handleYear}
      />
    </div>
  );
};

export default InputYear;
