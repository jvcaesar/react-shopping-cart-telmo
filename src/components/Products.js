import React from 'react'
import data from '../data.json'                 // Initial product data for the project
import { connect } from 'react-redux'
import { addBasket } from '../actions/addAction'

// Initialize the home page with saved products
const Products = (props) => {
    const products      = data.products
    const Image         = 'Image'
    const addToCart     = 'addToCart '
    console.log('Products Props: ', props)
    return (
        <div className='container'>
            {products.map(product => (
                <div className={product._id+Image} key={product._id}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                    <a onClick={props.addBasket} className={addToCart+product._id} href='#'>Add to Cart</a>
                </div>
            ))}
        </div>
    )
}

export default connect(null, { addBasket })(Products)
//export default Products