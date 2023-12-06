import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishlist: (state, action) => {
        state.value.push(action.payload) 

        
    },
  },
})


export const { addWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer