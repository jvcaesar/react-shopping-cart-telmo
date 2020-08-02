import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { FaPlusCircle, FaMinusCircle, FaTimesCircle } from 'react-icons/fa'
import { changeProductQty } from '../actions/changeProductQty'
import { deleteProduct } from '../actions/deleteProduct'

const Cart = ({ basketProps, changeProductQty, deleteProduct }) => {
    console.log('BasketProps: ', basketProps)
    const basket = basketProps
    let shoppingCart = []
    const basketItems = Object.keys(basket.cartList)
    console.log('keys: ', basketItems)

    // shopping cart list to display
    shoppingCart = basketItems.map(item => {
        //console.log('Item: ', item, basket.cartList[item].productName)
        
        const price = basket.cartList[item].productCost
        const qty = basket.cartList[item].productQty
        const image = basket.cartList[item].productImage
        return (
            <Fragment key={item}>
                <div className='product'>
                    <FaTimesCircle className='icon' onClick={() => deleteProduct(item)} />
                    <img src={image} />
                    <span className='sm-hide'>{basket.cartList[item].productName}</span>
                </div>
                <div className='price sm-hide'>€{price/100}</div>
                <div className='quantity'>
                    <FaMinusCircle className='decrease' 
                        onClick={() => changeProductQty('decrease', item)} />
                    <span>{qty}</span>
                    <FaPlusCircle className='increase' 
                        onClick={() => changeProductQty('increase', item)} />
                </div>
                <div className='total'>€{(price * qty)/100}</div>
            </Fragment>
        )
    })
    const ShowBasketTotals = () => {
        return (
            <Fragment>
                <h4 className='basketTotalTitle'>Basket Total</h4>
                <h4 className='basketTotal'>{basket.cartCost/100}</h4>
            </Fragment>
        )
    }

    if (basket.cartCost === 0)
        return (
            <div className='container-products'>
                <h3>No products selected. Add items to cart in the shop.</h3>
            </div>
        )
    return (
        <div className='container-products'>
            <div className='product-header'>
                <h5 className='product-title'>PRODUCT</h5>
                <h5 className='price sm-hide'>PRICE</h5>
                <h5 className='quantity'>QUANTITY</h5>
                <h5 className='total'>TOTAL</h5>
            </div>
            <div className='products'>
                { shoppingCart }
            </div>
            <div className='basketTotalContainer'>
                <ShowBasketTotals />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { changeProductQty, deleteProduct })(Cart)
