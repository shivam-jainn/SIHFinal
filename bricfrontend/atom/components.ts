import { atom } from 'recoil';

export const myArrayState = atom<string[]>({
  key: 'myArrayState',
  default: [],
});
