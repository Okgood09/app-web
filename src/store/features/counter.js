import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: '@counter',
    initialState: {
        value: {
            valor: 0,
            total: 0
        }
    },
    reducers: {
        increment: (state) => {
            const s = {
                ...state, value: {
                    ...state.value,
                    valor: state.value.valor + 1
                }
            }
            return s
        },
        decrement: (state) => {
            const s = {
                ...state, value: {
                    ...state.value,
                    valor: state.value.valor - 1
                }
            }
            return s
        },
        incrementByAmount: (state, action) => {
            state.value.valor += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer