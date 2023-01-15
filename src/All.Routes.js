import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import ProductListingPage from './pages/ProductListing/ProductListingPage';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductListingPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    )
}

export default AllRoutes