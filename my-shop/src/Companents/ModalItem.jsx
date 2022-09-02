import React from 'react'

export default function ModalItem(props) {
  return (
    <div className='modal' onClick={() => props.change()}>
      <div className='mosalInside' onClick={e=> e.stopPropagation()}>
        <img  alt={props.item.title} src={`./img/${props.item.name}`}/>
        <div>
          <div className='PriceAndAdd'>
            <h2><strong>{props.item.price}</strong></h2>
            <button className='AddToCart' type='button' onClick={() =>props.add(props.item)}>+</button>
          </div>
          <h3>{props.item.title}</h3>
          <p><strong> Brands: </strong>{props.item.brands}</p>
          <p><strong> Dimensions: </strong> {props.item.dimensions}</p>
          <p><strong> Description: </strong> {props.item.description}</p>
        </div>
      </div>
    </div>
  )
}
