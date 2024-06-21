import { createSlice } from '@reduxjs/toolkit';

const rosterSlice = createSlice({
  name: 'roster',
  initialState: {
    staff: [],
  },
  reducers: {
    setRoster: (state, action) => {
      state.staff = action.payload;
    },
    updateStaff: (state, action) => {
      const index = state.staff.findIndex(staff => staff.id === action.payload.id);
      if (index !== -1) {
        state.staff[index] = action.payload;
      }
    },
  },
});

export const { setRoster, updateStaff } = rosterSlice.actions;

export default rosterSlice.reducer;
