import React from 'react'
import data from '../data.json'                 // Initial product data for the project

// Initialize the home page with saved products
const Products = () => {
    const products      = data.products
    const Image         = 'Image'
    const addToCart     = 'addToCart '
    return (
        <div className='container'>
            {products.map(product => (
                <div className={product._id+Image} key={product._id}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <h3>{product.price}</h3>
                    <a className={addToCart+product._id} href='#'>Add to Cart</a>
                </div>
            ))}
        </div>
    )
}

export default Products