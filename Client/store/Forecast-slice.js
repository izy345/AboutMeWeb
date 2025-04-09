import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
    name: 'forecastSlice',
    initialState: {
        forecastData: [],

    },
    reducers: {
        setForecastData(state, action) {
            state.forecastData = action.payload;
        },
    },
});

export const forecastSliceActions = forecastSlice.actions;
export default forecastSlice.reducer;