import React from 'react';
import { useRecoilState } from 'recoil';
import { calendarTypeState, fontTypeState } from '../store/controls';

export const useControls = () => {
  const [calendarType, setCalendarType] = useRecoilState(calendarTypeState);
  const [fontType, setFontType] = useRecoilState(fontTypeState);

  return {
    calendarType,
    fontType,
    setCalendarType,
    setFontType,
  };
};
