import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: {},
}

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, { payload }) => {
      state.data = payload
    },
  },
})

export const { addOrder } = orderSlice.actions
export default orderSlice.reducer
