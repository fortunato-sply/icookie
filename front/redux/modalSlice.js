import { createSlice } from "@reduxjs/toolkit"

const modalInitialState = {
  state: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    toggleModal: (state) => { state.state = !state.state; },
    
  }
})