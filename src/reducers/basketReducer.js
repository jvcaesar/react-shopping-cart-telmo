import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types"
import data from '../data.json'

const initialCartState = {
    basketNumbers: 0,
    cartCost: 0,
    cartList: {
/*         '': {
            productName: '',
            productCost: 0,
            productQty: 0
            productImage: '/path'
        } */
    }
}



export default (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_BASKET:

            const productId         = action.payload            // From the user input, clicking on AddtoCart
            
            // Database retrievals
            const productsData      = data.products
            const productData       = productsData.filter(product => productId === product._id)[0]
            
                // State store retrievals
            const currentList       = state.cartList             // get the current stored State
            let totalCost           = state.cartCost

            // is the productID is in the current list
            if (currentList[productId]) {
                ++currentList[productId].productQty
            } else {
                const newItem = {
                    productName:    productData.title,
                    productCost:    productData.price,
                    productQty:     1,
                    productImage:   productData.image
                }
                currentList[productId] = newItem
            }
            totalCost = totalCost + productData.price

            const newState = { 
                ...state,
                basketNumbers:  ++state.basketNumbers,
                cartCost:       totalCost,
                cartList:       currentList
            }
            console.log('The state after: ', newState)
            return newState

        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state
    }
}