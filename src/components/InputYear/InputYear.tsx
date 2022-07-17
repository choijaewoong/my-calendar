import React, { FC, useRef } from 'react';
import styles from './InputYear.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useYear } from '../../hooks/useCalendar';

const InputYear: FC = () => {
  const { setYear } = useYear();
  const inputRef = useRef<HTMLInputElement>(null);

  const updateCalendar = () => {
    const minYear = 1;
    const maxYear = 2050;
    const inputYear = inputRef.current?.value ? inputRef.current?.value : '2022';
    const year = Math.min(maxYear, Math.max(Number(inputYear), minYear));
    if (inputRef.current) inputRef.current.value = String(year);
    setYear(year);
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
          <FontAwesomeIcon icon={solid('arrow-turn-down')} />
        </button>
      </div>
    </form>
  );
};

export default InputYear;
