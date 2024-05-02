import { forVerticalIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators'
import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        // products: PRODUCTS
        // filterProducts: PRODUCTS,
        favoriteProducts: []
    },
    reducers: {
        // TO DO
    }
})

export const { } = productSlice.actions
export default productSlice.reducer