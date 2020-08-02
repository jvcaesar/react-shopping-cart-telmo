import { INCREASE_PRODUCT_QUANTITY } from './types'
import { DECREASE_PRODUCT_QUANTITY } from './types'
import { DELETE_PRODUCT } from './types'

export const changeProductQty = (operation, item) => {
    return (dispatch) => {
        console.log(`${operation} the ${item}'s quantity`)

        dispatch({
            type:       operation === 'increase' ? INCREASE_PRODUCT_QUANTITY : DECREASE_PRODUCT_QUANTITY,
            payload:    item
        })
    }
}


/* export const deleteProduct = (productId) => {
    return (dispatch) => {
        console.log(`Deleting from the basket ${productId}`)
        dispatch({
            type: DELETE_PRODUCT,
            payload: productId
        })
    }
} */