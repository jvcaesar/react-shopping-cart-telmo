import React from 'react'
import { connect } from 'react-redux'
import Products from './Products'
import { addBasket } from '../actions/addAction'

const Home = (props) => {
    console.log('Home Props: ', props)
    return (
        <div className='container'>
            <div className='image'>
                <img src='' alt='' />
                <Products />
            </div>
        </div>
    )
}

export default connect(null, { addBasket })(Home)