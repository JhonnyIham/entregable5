import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: '',
    reducers: {
        setTrainesName: (currentValue, action) => action.payload
    }
})

export const { setTrainesName } = trainerNameSlice.actions

export default trainerNameSlice.reducer