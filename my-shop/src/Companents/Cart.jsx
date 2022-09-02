import React from 'react'

import CartItems from './CartItems'

export default function Cart(props) {
  const cartBarOpen = () => {
  if (props.list.length) {
    return (<div className='main'>{props.list.map(el => <CartItems item={el} key={el.id} remove={props.remove} />)}</div>)
  } else {return "There aren't elements yet"}
      }

  return (
    <div className='cartList' onClick={e => e.stopPropagation()}>
      {cartBarOpen()}
    </div>
  )
}
