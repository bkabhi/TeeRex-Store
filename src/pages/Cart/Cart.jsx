import React from 'react'
import './Cart.css'
let cartData = JSON.parse(localStorage.getItem('cartData'))||[];
const total = cartData.reduce((accumulator, {price,quantity})=>accumulator+(price*quantity), 0);


const Cart = () => {

  const handleDelete = (id)=>{
    console.log(id, " delete cart");
  }

  return (
    <div className='cart'>
      <h3>Shopping Cart</h3>
      <div className='cart__details'>
        <div  className='cart__products'>
          {
            cartData.map(item=>(
              <div className='cart__item' key={item.id}>
                <img src={item.imageURL} width={100} alt={item.name} />
                <div>
                  <h2>{item.name}</h2>
                  <h2>{item.price}</h2>
                </div>
                <button> Qty: {item.quantity} </button>
                <button onClick={()=>handleDelete(item.id)}> Delete </button>
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