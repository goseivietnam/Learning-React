import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

let initialCounter: CounterState = {
    value: 0
}


export const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounter,
    reducers: {
        increment: (state: CounterState) => {

            state.value += 1
        },
        decrement: (state: CounterState) => {

            state.value -= 1
        },
        incrementByAmout: (state: CounterState, action: PayloadAction<number>) => {

            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmout } = counterSlice.actions;
export default counterSlice.reducer;
