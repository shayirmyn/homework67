import {createSlice} from "@reduxjs/toolkit";

export interface DoorState {
    value: string;
    type: string;
}

const initialState: DoorState = {
    value: "",
    type: "",
};

export const doorLockSlice = createSlice({
    name: "doorLock",
    initialState,
    reducers: {
        onValueChange: (state, action) => {
            state.value = action.payload;
        },

        btnClick: (state, action) => {
            if (state.value.length < 4) {
                state.value += action.payload;
            }
            console.log(state.value);
        },
    }
});

export const doorLockReducer = doorLockSlice.reducer;
export const {onValueChange, btnClick,} = doorLockSlice.actions;