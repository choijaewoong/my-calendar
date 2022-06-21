import React, { FC, useEffect, useRef } from 'react';
import styles from './InputYear.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = {
  year: number;
  handleYear: (myYear: number) => void;
};
const InputYear: FC<Props> = (props) => {
  const { year, handleYear } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const updateCalendar = () => {
    const minYear = 1;
    const maxYear = 2050;
    const inputYear = inputRef.current?.value ? inputRef.current?.value : '2022';
    const year = Math.min(maxYear, Math.max(Number(inputYear), minYear));

    if (inputRef.current) inputRef.current.value = String(year);
    handleYear(year);
  };

  return (
    <form className={styles.input_wrap} onSubmit={(e) => e.preventDefault()}>
      <label className={styles.label_year} htmlFor="year">
        Year
      </label>
      <div className={styles.input_inner}>
        <input
          ref={inputRef}
          id="year"
          className={styles.input_year}
          type="number"
          name="year"
          placeholder="2022"
          autoComplete="off"
        />
        <button type="submit" className={styles.button_year} onClick={updateCalendar}>
          <FontAwesomeIcon icon={solid('arrow-right')} />
        </button>
      </div>
    </form>
  );
};

export default InputYear;
