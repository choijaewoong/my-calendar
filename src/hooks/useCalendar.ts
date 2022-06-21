import React, { ChangeEvent, useState, useEffect } from 'react';
import { Holiday } from '../types/holiday';
import axios from 'axios';

export const useYear = () => {
  const [year, setYear] = useState<number>(2022);
  const handleYear = (myYear: number) => {
    setYear(Number(myYear));
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
        const CALENDAR_ID = 'ko.south_korea.official%23holiday%40group.v.calendar.google.com';
        const response = await axios.get(`/api/${CALENDAR_ID}/events`, {
          params: {
            key: process.env.REACT_APP_GOOGLE_CALENDAR_API_KEY,
            timeMin: `${year}-01-01T00:00:00Z`,
            timeMax: `${year + 1}-01-01T00:00:00Z`,
            orderBy: 'startTime',
            singleEvents: true,
          },
        });
        const item = response.data.items;
        const length = item.length;
        for (let i = 0; i < length; i++) {
          setHolidayList((holidayList) => [...holidayList, { date: item[i].start.date, name: item[i].summary }]);
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
