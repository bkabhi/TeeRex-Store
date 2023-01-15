import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartProducts } from '../../rudux/cart/action';

const ProductCard = ({item}) => {
    const dispatch = useDispatch()
    const { cart: cartData } = useSelector(state => state.Cart);

    const handleCart = (item) => {
        let flag = cartData.findIndex(ele=>ele.id===item.id);
        if (flag !== -1) {
            alert("This Product is already in the cart")
        }else{
            dispatch(addCartProducts({ ...item, cartQuantity: 1 }))
        }
    }
    
    return (
        <div className='productsList__item'>
            <div className='productsList__item__imgdiv'>
                <img src={item.imageURL} alt={item.name} />
                <h2>{item.name}</h2>
            </div>
            <div className='productsList__item__details'>
                <h2>Rs {item.price}</h2>
                <button onClick={() => handleCart(item)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard