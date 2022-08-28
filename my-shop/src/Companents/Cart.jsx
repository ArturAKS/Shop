import React from 'react'
import CartItems from './CartItems'

export default function Cart(props) {
      
  return (
    <div className='cartList' onClick={e => e.stopPropagation()}>
      {props.list.length ? (<div className='main'>{props.list.map(el => <CartItems item={el} key={el.id} remove={props.remove} />)}</div>) : "There aren't elements yet"}
    </div>
  )
}
