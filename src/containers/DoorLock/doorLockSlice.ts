import {createSlice} from "@reduxjs/toolkit";

export interface DoorState {
    value: string;
    type: string;
    className: string;
}

const initialState: DoorState = {
    value: "",
    type: "password",
    className: "none",
};

const password = "2835";

export const doorLockSlice = createSlice({
    name: "doorLock",
    initialState,
    reducers: {
        onValueChange: (state, action) => {
            if (state.value === "Access Granted" ||  state.value === "Access Denied") {
                state.value = "";
                state.type = "password";
                state.className = "none";
            }
            state.className = "none";
            state.type = "password";
            state.value = action.payload;
        },

        btnClick: (state, action) => {
            if (state.value === "Access Granted" ||  state.value === "Access Denied") {
                state.value = "";
                state.type = "password";
                state.className = "none";
            }
            if (state.value.length < 4) {
                state.className = "none";
                state.type = "password";
                state.value += action.payload;
            }
        },

        backSpace: (state) => {
            if (state.value === "Access Granted" ||  state.value === "Access Denied") {
                state.value = "";
                state.type = "password";
                state.className = "none";
            }
            state.value = state.value.slice(0, state.value.length -1);
        },

        enter: (state) => {
            state.type = "text";
            if (state.value === password) {
                state.className = "green";
                state.value = "Access Granted";
            } else {
                state.className = "red";
                state.value = "Access Denied";
            }
        }
    }
});

export const doorLockReducer = doorLockSlice.reducer;
export const {onValueChange, btnClick,
    backSpace, enter} = doorLockSlice.actions;