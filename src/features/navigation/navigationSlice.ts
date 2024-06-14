import { createSlice } from "@reduxjs/toolkit";

interface NavigationState {
  isOpen: boolean;
}

const initialState: NavigationState = {
  isOpen: false,
};

const navigationSlide = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleNavigation: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export default navigationSlide.reducer;
export const { toggleNavigation } = navigationSlide.actions;
