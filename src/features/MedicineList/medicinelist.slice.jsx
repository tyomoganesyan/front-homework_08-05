import { createSlice } from "@reduxjs/toolkit";

const MedicineSlice = createSlice({
    name: "medicine",
    initialState: {
        medicines: [
            {
                id: 101,
                name: "Analgin",
                image: "https://cdn.eapteka.ru/upload/offer_photo/364/49/1_3e577aa8cfea02636b78cbacb78d7cb2.png?t=1666782456&_cvc=1725430717",
                rate: 0
            },
            {
                id: 102,
                name: "Aspirin",
                image: "https://www.aspirin.ca/sites/g/files/vrxlpx30151/files/2021-06/Aspirin-Regular-extra-strength-100ct-carton.png",
                rate: 0
            },
            {
                id: 103,
                name: "Tebantin",
                image: "https://www.eapteka.ru/upload/offer_photo/207/820/1_7b027d02a415507e94cbd76b6aeedd6b.png?t=1641826815",
                rate: 0
            }
        ]
    },
    reducers: {
        rateMedicine: (state, action) => {
            state.medicines.find(m => m.id == action.payload.item_id).rate = action.payload.rate
        },
        // findMedicine: (state, action) => {
        //     action.payload = action.payload.trim()
        //     console.log(action.payload)
        //     if(action.payload) {
        //         state.medicines = state.medicines.find(m => m.name.startsWith(action.payload))
        //     }
        // }
    }
})

export const medicineReducer = MedicineSlice.reducer
export const { rateMedicine} = MedicineSlice.actions