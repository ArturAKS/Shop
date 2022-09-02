import React, { useState } from 'react'

import ModalItem from './ModalItem'


export default function Items (props) {
 let [modal,setModal] = useState(false)
  let [item, setItem] = useState({})

  function changeModal(el) {
     setModal(modal = true)
    setItem(item = el)
  }
 
  function change () {
   setModal(modal = false)
  }
  const addBtnClicked = e => {e.stopPropagation() ; props.add(props.item)}
  return (
    <>
      {modal && (<ModalItem item = {item} change={change} add={props.add}/>)}
      <div className='items' onClick={()=> changeModal(props.item)}>     
        <img  alt={props.item.title} src={`./img/${props.item.name}`}/>
        <h3>{props.item.title}</h3>
        <div className='PriceAndAdd'>
          <h2><strong>{props.item.price}</strong></h2>        
          <button className='AddToCart' type='button' onClick={addBtnClicked}>+</button>
        </div>   
      </div>
    </>
  )
}