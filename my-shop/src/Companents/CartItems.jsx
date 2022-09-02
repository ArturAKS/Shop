import React, { useState } from 'react'

export default function CartItems(props) {

  let [count, setCount] = useState(1)
  const changeCount = (e) => setCount(e.target.value)
  

  
  return (
    <div className='cartItems'>
        <img  alt={props.item.title} src={`./img/${props.item.name}`}/>
        <h3>{props.item.title}</h3>   
        <hr/>
        <div className='cartCountDiv'>
          <input className='count' type='number' min='1' step='1' value={count} onChange={changeCount} />
          <div className='cartPriceAndAdd'>
            <h2><strong>{props.item.price}</strong></h2>        
            <button className='cartAddToCart' type='button' onClick={() => props.remove(props.item)}>-</button>
          </div>
        </div>
    </div>
  )
}
