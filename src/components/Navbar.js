import React from 'react'
import { IoIosCart } from 'react-icons/io'
import { IoMdCart } from 'react-icons/io'

const Navbar = () => {
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
                    Cart<span> 0</span></a>
                </li>
            </ul>
            </nav>
        </header>
    )
}

export default Navbar