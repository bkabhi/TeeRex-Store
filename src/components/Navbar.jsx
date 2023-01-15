import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

let cartData = JSON.parse(localStorage.getItem('cartData'))||[];
let cartDataLength = cartData.reduce((prev, curr)=>prev+curr.quantity,0);

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <NavLink to='/' >
                    <h3>TeeRex Store</h3>
                </NavLink>
            </div>
            <div className='navbar__right'>
                <NavLink to='/' >
                    <h3>Products</h3>
                </NavLink>
                <NavLink to='/cart' >
                    <div className='navbar__right__cartIcon'>
                        <AiOutlineShoppingCart size={40}/>
                        {cartDataLength>0?<span className='navbar__noOfCartItem'>{cartDataLength}</span>:""}
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar