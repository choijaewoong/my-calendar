import { atom } from 'recoil';

export const calendarTypeState = atom<'' | 'type_vertical'>({
  key: 'calendarTypeState',
  default: '',
});
