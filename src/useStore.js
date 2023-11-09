import { create } from "zustand";

export const useStore = create((set)=>({
  isDark :false,
  setIsDark : ()=> set(
    (state) => ({
      isDark : !state.isDark
    })


  )
}))