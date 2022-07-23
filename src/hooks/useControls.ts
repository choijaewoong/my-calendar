import React from 'react';
import { useRecoilState } from 'recoil';
import { calendarTypeState } from '../store/controls';

export const useControls = () => {
  const [calendarType, setCalendarType] = useRecoilState(calendarTypeState);

  return {
    calendarType,
    setCalendarType,
  };
};
