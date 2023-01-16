import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartProducts, updateCartProducts } from '../../rudux/cart/action';

const Cart = () => {
  const dispatch = useDispatch();
  const { cart: cartData, totalPrice: total } = useSelector(state => state.Cart);

  const handleDelete = (id)=>{
    dispatch(deleteCartProducts(id));
  }

  const handleUpdate = (id, val)=>{
    dispatch(updateCartProducts({id, val}));
  }

  return (
    <div className='cart'>
      <h3>Shopping Cart</h3>
      <div className='cart__details'>
        <div  className='cart__products'>
          {
            cartData.map(item=>(
              <div className='cart__item' key={item.id}>
                <div className='cart__item__Details'>
                  <img src={item.imageURL} width={100} alt={item.name} />
                  <div>
                    <h2>{item.name}</h2>
                    <h2>{item.price*item.cartQuantity}</h2>
                  </div>
                </div>
                <div className='cart__item__update'>
                  <div className='cart__item__quantity'>
                    <button onClick={()=>handleUpdate(item.id, -1)} disabled={item.cartQuantity<=1}> - </button>
                    <button> Qty: {item.cartQuantity} </button>
                    <button onClick={()=>handleUpdate(item.id, 1)} disabled={item.cartQuantity>=item.quantity}> + </button>
                  </div>
                  <button className='cart__item__deleteBtn' onClick={()=>handleDelete(item.id)}> Delete </button>
                </div>
              </div>
            ))
          }
        </div>
        <div className='cart__details__total'>
            <h2 className='cart__total'> Total amount </h2>
            <span> Rs. {total} </span>
        </div>
      </div>
    </div>
  )
}

export default Cart