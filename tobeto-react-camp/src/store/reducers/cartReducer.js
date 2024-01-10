import { cartItems } from "../initialValues/cartItems";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
    cartItems: cartItems

}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantity++;
                return {
                    ...state // ... içerisindeki elemanları yeniden oluşturur ayırma işlemi yapar
                }
            } else {
                return {
                    ...state,// yeni bir obje olur ve bunları ayırıyor gibi düşün
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            } case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
            }
        default:
            return state;
    }
}