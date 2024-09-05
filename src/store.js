import { configureStore } from "@reduxjs/toolkit";
import { medicineReducer } from "./features/MedicineList/medicinelist.slice";


export const store = configureStore({
    reducer: medicineReducer
})