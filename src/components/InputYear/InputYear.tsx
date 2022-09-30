import React, { FC, useRef } from 'react';
import styles from './InputYear.module.scss';
import { useYear } from '../../hooks/useCalendar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DateRangeIcon from '@mui/icons-material/DateRange';
import InputAdornment from '@mui/material/InputAdornment';

const InputYear: FC = () => {
  const { year, setYear } = useYear();
  const inputRef = useRef<HTMLInputElement>(null);

  const updateCalendar = (e: React.FormEvent) => {
    e.preventDefault();
    const minYear = 1;
    const maxYear = 2050;
    const inputYear = inputRef.current?.value ? inputRef.current?.value : '2023';
    const year = Math.min(maxYear, Math.max(Number(inputYear), minYear));
    if (inputRef.current) inputRef.current.value = String(year);
    setYear(year);
  };

  return (
    <Box component="form" className={styles.input_wrap} noValidate autoComplete="off" onSubmit={updateCalendar}>
      <TextField
        className={styles.input_inner}
        label="Year"
        defaultValue={year}
        color="secondary"
        variant="standard"
        inputRef={inputRef}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <DateRangeIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default InputYear;
