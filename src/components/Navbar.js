import React from 'react'
import { connect } from 'react-redux'
import { IoIosCart } from 'react-icons/io'
import { IoMdCart } from 'react-icons/io'
import { Link } from 'react-router-dom'

// The connect() function connects a React component to a Redux store.

const Navbar = (props) => {
    console.log('Navbar props: ', props)
    const numberOfItems = props.basketProps.basketNumbers

    return (
        <header className="App-header">
            <div className='overlay'></div>
            <nav>
            <h2>Shop</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li className='cart'><Link to='/cart'>
                    <IoIosCart color='black' fontSize='20px' 
                    style={{ "verticalAlign": "bottom" }}
                    />
                    <IoMdCart className='icons'/>
                    Cart<span> {numberOfItems}</span></Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps)(Navbar)
