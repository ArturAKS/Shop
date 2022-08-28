import React from 'react'

export default function CartItems(props) {
  return (
    <div className='items'>
        <img  alt={props.item.title} src={`./img/${props.item.name}`}/>
        <h3>{props.item.title}</h3>
        <div className='PriceAndAdd'>
        <h2><strong>{props.item.price}</strong></h2>
        <button className='AddToCart' type='button' onClick={() => props.remove(props.item)}>-</button>
        </div>
    </div>
  )
}
