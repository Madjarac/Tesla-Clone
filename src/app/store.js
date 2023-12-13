import { configureStore } from 'reduxjs/toolkit';
import carReducer from "../features/car/carSlicer"

export const store = configureStore({
    reducer: {
        car: carReducer
    },
});