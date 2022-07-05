import { GET_ALL_PRODUCT, ADD_CART } from "../actions/type";
const initProduct = {
    numberCart: 0,
    Carts: [],
    products: []
}

export default function (state = initProduct, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                products: payload

            };
        case ADD_CART:
            if (state.numberCart == 0) {
                let cart = {

                    quantity: 1,
                    product: {
                        id: payload.id,
                        name: payload.name,
                        image: payload.image,
                        price: payload.price,
                        weight: payload.weight,
                        description: payload.description,
                        status: payload.status,
                        createddate: payload.createddate,
                        category: payload.category
                    }

                }
                state.Carts.push(cart)
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.product.id == payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {

                        quantity: 1,
                        product: {
                            id: payload.id,
                            name: payload.name,
                            image: payload.image,
                            price: payload.price,
                            weight: payload.weight,
                            description: payload.description,
                            status: payload.status,
                            createddate: payload.createddate,
                            category: payload.category
                        }

                    }
                    state.Carts.push(_cart);
                }

            }
            return {
                ...state,
                numberCart: state.numberCart + 1
            };
        case 'CLEAR_CART':
            return {
                ...state,
                Carts: [],
                numberCart: 0

            };


        default:
            return state;
    }
}