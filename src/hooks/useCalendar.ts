import React, { ChangeEvent, useState } from 'react';

export const useYear = () => {
  const [year, setYear] = useState<number>(2022);
  const handleYear = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.valueAsNumber);
  };
  return {
    year,
    handleYear,
  };
};
