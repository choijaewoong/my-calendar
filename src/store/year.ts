import { atom } from 'recoil';
import { Holiday } from '../types/holiday';

export const yearState = atom<number>({
  key: 'yearState',
  default: 2022,
});

export const holidayState = atom<Holiday[]>({
  key: 'holidayState',
  default: [],
});
