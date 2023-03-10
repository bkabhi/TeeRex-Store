import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartDataLength = useSelector(state => state.Cart.totalProducts);
    
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