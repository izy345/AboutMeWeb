import { configureStore } from '@reduxjs/toolkit';
import forecastSliceReducer from './Forecast-slice';
import mobileSliceReducer from './mobile-slice';

export const store = configureStore({
    reducer: {
        forecast : forecastSliceReducer,
        mobile : mobileSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: true,
        }),
});