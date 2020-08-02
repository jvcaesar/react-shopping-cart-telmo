import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaArrowCircleRight, FaTimesCircle } from 'react-icons/fa'

function Cart(props) {
    console.log('BasketProps: ', props.basketProps)
    const basket = props.basketProps
    let shoppingCart = []
    const basketItems = Object.keys(basket.cartList)
    console.log('keys: ', basketItems)
    shoppingCart = basketItems.map(item => {
        console.log('Item: ', item, basket.cartList[item].productName)
        
        const price = basket.cartList[item].productCost
        const qty = basket.cartList[item].productQty
        const image = basket.cartList[item].productImage
        return (
            <Fragment key={item}>
                <div className='product'><FaTimesCircle className='icon'/><img src={image} />
                    <span className='sm-hide'>{basket.cartList[item].productName}</span>
                </div>
                <div className='price sm-hide'>€{price}</div>
                <div className='quantity'>
                    <FaArrowCircleLeft className='icon1'/><span>{qty}</span><FaArrowCircleRight className='icon2'/>
                </div>
                <div className='total'>€{price * qty}</div>
            </Fragment>
        )
    })
    console.log('format', shoppingCart)

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
                <h4 className='basketTotalTitle'>Basket Total</h4>
                <h4 className='basketTotal'>{basket.cartCost}</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps)(Cart)
