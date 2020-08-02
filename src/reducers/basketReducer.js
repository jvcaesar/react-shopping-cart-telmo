import { ADD_PRODUCT_BASKET, DELETE_PRODUCT, GET_NUMBERS_BASKET,
        INCREASE_PRODUCT_QUANTITY, DECREASE_PRODUCT_QUANTITY } from "../actions/types"
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
    // declare & initialize all variables to be used here
    let productId='', productsData='', productData='', currentList='', totalCost=0, newState=''
    switch (action.type) {
        case ADD_PRODUCT_BASKET:

            productId         = action.payload            // From the user input, clicking on AddtoCart
            
            // Database retrievals
            productsData      = data.products
            productData       = productsData.filter(product => productId === product._id)[0]
            
                // State store retrievals
            currentList       = state.cartList             // get the current stored State
            totalCost           = state.cartCost

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

            newState = { 
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
        case INCREASE_PRODUCT_QUANTITY:
            productId           = action.payload
            console.log(`Reducer: Increase the ${productId}'s quantity`)
            currentList         = state.cartList

            // operating on the changed state fields
            totalCost           = state.cartCost + currentList[productId].productCost
            ++currentList[productId].productQty
            newState = {
                ...state,
                basketNumbers:  ++state.basketNumbers,
                cartCost:       totalCost,
                cartList:       currentList
            }
            console.log('The state after qty increase: ', newState)
            return newState
        case DECREASE_PRODUCT_QUANTITY:
            productId           = action.payload
            console.log(`Reducer: Decrease the ${productId}'s quantity`)
            currentList         = state.cartList

            // operating on the changed state fields
            totalCost           = state.cartCost - currentList[productId].productCost
            --currentList[productId].productQty

            // if product quantity is zero, remove the product from the shopping list
            if (currentList[productId].productQty <= 0) {
                delete currentList[productId]
                if (Object.keys(currentList).length === 0)
                    totalCost       = 0
            }

            newState = {
                ...state,
                basketNumbers:  --state.basketNumbers,
                cartCost:       totalCost,
                cartList:       currentList
            }
            console.log('The state after qty increase: ', newState)
            return newState
        case DELETE_PRODUCT:
            productId           = action.payload
            currentList         = state.cartList

            // reduce totalcost and basketNumbers by productId amounts
            productData         = currentList[productId]
            totalCost           = state.cartCost - (productData.productCost * productData.productQty)
            delete currentList[productId]
            console.log('length of currentList: ', Object.keys(currentList).length)
            if (Object.keys(currentList).length === 0)
                totalCost       = 0
            newState = {
                ...state,
                basketNumbers:  state.basketNumbers - productData.productQty,
                cartCost:       totalCost,
                cartList:       currentList
            }
            return newState
        default:
            return state
    }
}