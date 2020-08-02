import { DELETE_PRODUCT } from './types'

export const deleteProduct = (productId) => {
    return (dispatch) => {
        console.log(`Deleting from basket ${productId}`)
        dispatch({
            type: DELETE_PRODUCT,
            payload: productId
        })
    }
}