import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { IoIosCart } from 'react-icons/io'
import { IoMdCart } from 'react-icons/io'
import { getNumbers } from '../actions/getAction'

// The connect() function connects a React component to a Redux store.

const Navbar = (props) => {
    console.log('Navbar props: ', props)
    const numberOfItems = props.basketProps.basketNumbers

/*     useEffect(() => {
        getNumbers()
    }, []) */

    return (
        <header className="App-header">
            <div className='overlay'></div>
            <nav>
            <h2>Shop</h2>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li className='cart'><a href='#'>
                    <IoIosCart color='black' fontSize='20px' 
                    style={{ "verticalAlign": "bottom" }}
                    />
                    <IoMdCart />
                    Cart<span> {numberOfItems}</span></a>
                </li>
            </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, { getNumbers })(Navbar)
