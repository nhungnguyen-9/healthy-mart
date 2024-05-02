import { createSlice } from '@reduxjs/toolkit'
import PRODUCTS from '../data/productData'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: PRODUCTS,
        // filterProducts: PRODUCTS,
        favoriteProducts: []
    },
    reducers: {
        // TO DO
    }
})

export const { } = productSlice.actions
export default productSlice.reducer