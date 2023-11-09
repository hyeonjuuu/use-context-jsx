import { atom, selector } from "recoil";

export const darkState = atom({
  key: 'darkState',
  default: false
})

export const isDarkState = selector({
  key: 'isDarkState',
  get({ get }) {
    const isDark = get(darkState);
    return !isDark
  }
})