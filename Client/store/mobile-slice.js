import { createSlice } from "@reduxjs/toolkit";

const mobileSlice = createSlice({
    name: 'mobileSlice',
    initialState: {
        isMobile: window.innerWidth < 900,

    },
    reducers: {
        setisMobile(state, action) {
            state.isMobile = action.payload;
        },
    },
});

export const mobileSliceActions = mobileSlice.actions;
export default mobileSlice.reducer;