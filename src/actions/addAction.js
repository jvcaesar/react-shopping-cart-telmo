import { ADD_PRODUCT_BASKET } from './types'

export const addBasket = (productId) => {
    return (dispatch) => {
        console.log('Adding to the basket')
        console.log('Product: ', productId)
        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: productId
        })
    }
}