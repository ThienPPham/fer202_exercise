import { createSlice } from "@reduxjs/toolkit";
import { products } from "./Data";

const initialState = products ?? []; // Use an empty array if productList is undefined

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload)
        },

        updateProduct: (state, action) => {
            const { id, name, price, description, catalogs } = action.payload;
            const uu = state.find(product => product.id == id);
            if (uu) {
                uu.name = name;
                uu.price = price;
                uu.description = description;
                uu.catalogs = catalogs;
            }
        },

        deleteProduct: (state, action) => {
            const { id } = action.payload;
            const uu = state.find(product => product.id == id);
            if (uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
});

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;