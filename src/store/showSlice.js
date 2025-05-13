import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: null,
  seats: [{}],
};

const showSlice = createSlice({
  name: "show",
  initialState,
  reducers: {
    setShow: (state, action) => {
      state.show = action.payload;
      state.seats = [];
    },
    resetShow: (state, action) => {
      state.show = null;
      state.seats = [];
    },
    selectSeat: (state, action) => {
      state.seats.push(action.payload);
    },
    removeSeat: (state, action) => {
      state.seats = state.seats.filter(
        (seat) => seat.id !== parseInt(action.payload)
      );
    },
  },
});

export const { setShow, resetShow, selectSeat, removeSeat } = showSlice.actions;

export default showSlice.reducer;
