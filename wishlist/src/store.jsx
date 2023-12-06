import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './Redux/WishlistSlice'
export const store = configureStore({
    reducer: {
        wishlist: wishlistReducer

    }
})