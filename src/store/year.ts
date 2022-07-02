import { atom } from 'recoil';

export const yearState = atom<number>({
  key: 'yearState',
  default: 2022,
});
