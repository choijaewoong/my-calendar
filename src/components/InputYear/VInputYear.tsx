import React, { FC } from 'react';
import styles from './InputYear.module.scss';

type Props = {
  year: number;
  handleYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputYear: FC<Props> = (props) => {
  const { year, handleYear } = props;

  return (
    <div className={styles.input_wrap}>
      <input type="number" name="year" placeholder="Year" value={year} onChange={handleYear} />
    </div>
  );
};

export default InputYear;
