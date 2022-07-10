import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { yearState, holidayState } from '../store/year';
import { HolidaysOfYears } from '../constants/holidays';

export const useYear = () => {
  const [year, setYear] = useRecoilState(yearState);
  const [holidayList, setHolidayList] = useRecoilState(holidayState);
  useEffect(() => {
    setHolidayList(
      HolidaysOfYears.find((e) => {
        return e.year == year;
      })?.holidayList || []
    );
  }, [year]);

  return {
    year,
    setYear,
    holidayList,
  };
};
