import { createSlice } from '@reduxjs/toolkit'
import PRODUCTS from '../data/productData'

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: PRODUCTS,
        filterProducts: PRODUCTS,
        cart: [],
        favorites: []
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity } = action.payload;
            const productToAdd = state.cart.find(product => product.id === id);
            if (productToAdd) {
                productToAdd.quantity += quantity;
            } else {
                const newProduct = state.products.find(product => product.id === id);
                if (newProduct) {
                    state.cart.push({ ...newProduct, quantity });
                }
            }
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const productToUpdate = state.cart.find(product => product.id === id);
            if (productToUpdate) {
                productToUpdate.quantity = quantity;
            }
        },
        removeFromCart: (state, action) => {
            const { id } = action.payload;
            state.cart = state.cart.filter(product => product.id !== id);
        },
        addToFavorites: (state, action) => {
            const { id } = action.payload;
            const productToAdd = state.products.find((product) => product.id === id);
            if (productToAdd && !state.favorites.find((product) => product.id === id)) {
                state.favorites.push(productToAdd);
            }
        },
        removeFromFavorites: (state, action) => {
            const { id } = action.payload;
            state.favorites = state.favorites.filter((product) => product.id !== id);
        },
    }
})

export const { addToCart, updateQuantity, removeFromCart, addToFavorites, removeFromFavorites } = productSlice.actions
export default productSlice.reducer
