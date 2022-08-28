import React from 'react'



export default function Items (props) {
  return (
         <div className='items' onClick={()=> props.changeModal(props.item)}>     
        <img  alt={props.item.title} src={`./img/${props.item.name}`}/>
        <h3>{props.item.title}</h3>
        <div className='PriceAndAdd'>
        <h2><strong>{props.item.price}</strong></h2>
        <button className='AddToCart' type='button' onClick={e =>{e.stopPropagation(); props.add(props.item)}}>+</button>
        </div>   
          
    
    </div>
  )
}