import { atom } from 'recoil';
import { controlsType } from 'types/controls';

export const calendarTypeState = atom<controlsType['calendarType']>({
  key: 'calendarTypeState',
  default: '',
});

export const fontTypeState = atom<controlsType['fontType']>({
  key: 'fontTypeState',
  default: 'pretendard',
});
