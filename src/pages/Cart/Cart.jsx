import React from 'react'

let cartData = JSON.parse(localStorage.getItem('cartData'))||[];
const total = cartData.reduce((accumulator, {price,quantity})=>accumulator+(price*quantity), 0);


const Cart = () => {

  const handleDelete = (id)=>{
    console.log(id, " delete cart");
  }

  return (
    <div style={{textAlign:'left', width:'90%', margin:'auto'}}>
      <h3>Shopping Cart</h3>
      <div style={{width:'fit-content', marginTop:'4rem'}}>
        <div style={{marginLeft:'6rem', fontSize:'12px', borderBottom:'2px solid black'}}>
          {
            cartData.map(item=>(
              <div key={item.id} style={{display:'flex', alignItems:'center', gap:'4rem', margin:'2rem', marginLeft:'0'}}>
                <img src={item.imageURL} width={100} background='black' alt={item.name} />
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
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'2rem', marginTop:'1rem'}}>
            <h2 style={{fontSize:'1.3rem'}}> Total amount </h2>
            <span> Rs. {total} </span>
        </div>
      </div>
    </div>
  )
}

export default Cart