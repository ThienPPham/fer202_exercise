import { createSlice } from "@reduxjs/toolkit";
import { products } from "./Data";

const productSlice = createSlice({
    name: "products",
    initialState: products,
    reducers: {
        addProduct: (state, action) =>{
            state.push(action.payload)
        },

        updateProduct: (state, action) => {
            const {id, name, description, price, currentPrice} = action.payload;
            const uu = state.find(product => product.id == id);
            if(uu){
                uu.name = name;
                uu.description = description;
                uu.price = price;
                uu.currentPrice = currentPrice;
            }
        },
        
        deleteProduct:(state, action) => {
            const {id} = action.payload;
            const uu = state.find(product => product.id == id);
            if(uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})
export const {addProduct ,deleteProduct, updateProduct} = productSlice.actions;
export default productSlice.reducer
