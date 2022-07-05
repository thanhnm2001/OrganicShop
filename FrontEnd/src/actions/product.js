import callApiProduct from "../services/product.service"
import { GET_ALL_PRODUCT, ADD_CART } from "../actions/type";
export const actFetchProduct = () => {
    return (dispatch) => {
        return callApiProduct()
            .then(res => {

                dispatch(GetAllProduct(res.data));


            })
    }
}
export function GetAllProduct(payload) {
    return {
        type: GET_ALL_PRODUCT,
        payload
    }
}
export function AddCart(payload) {
    return {
        type: ADD_CART,
        payload
    }
}
export function ClearCart() {
    return {
        type: 'CLEAR_CART',

    }
}