import React, { ChangeEvent, useState, useEffect } from 'react';
import { Holiday } from '../types/holiday';
import axios from 'axios';

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

export const getHolidayList = (year: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [holidayList, setHolidayList] = useState<Holiday[]>([]);
  useEffect(() => {
    const fetchHolidayList = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/B090041/openapi/service/SpcdeInfoService/getHoliDeInfo', {
          params: {
            ServiceKey: process.env.REACT_APP_SERVICE_KEY,
            solYear: year,
            _type: 'json',
            numOfRows: 30,
          },
        });

        const item = response.data.response.body.items.item;
        const length = item.length;
        for (let i = 0; i < length; i++) {
          setHolidayList((holidayList) => [...holidayList, { locdate: item[i].locdate, dateName: item[i].dateName }]);
        }
        return response;
      } catch (err) {
        console.log('Error >>', err);
      }
    };
    fetchHolidayList().then(() => {
      setIsLoading(false);
    });
  }, [year]);
  return { isLoading, holidayList };
};
