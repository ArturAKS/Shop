import React from 'react'
import { useState } from 'react'
import { CgMenu } from "react-icons/cg"
import { TiShoppingCart } from "react-icons/ti"
import Cart from './Cart'
import Menu from './Menu'
import {
  NavLink
} from "react-router-dom"

  function Navbar (props) {
    let [menuShow, setMenuShow] = useState(false)
    let [cartShow, setCartShow] = useState(false)
  return (
    
      <div onClick={()=> {setMenuShow(menuShow = false); setCartShow(cartShow = false) }}>
      <div className='navBar'>
        <span> <CgMenu className={`manuBar ${menuShow && 'active'}`} onClick={(e) =>{e.stopPropagation(); setMenuShow(menuShow = !menuShow)}}/></span>
        <ul> 
        <li><TiShoppingCart className='shoppingCart' onClick= {(e) => { e.stopPropagation();setCartShow(cartShow = !cartShow)}} /></li>
        <li><NavLink className='homeLink' to='/'>Home</NavLink></li>
        </ul>
      </div>
      {menuShow && ( <Menu />
      )}
      {cartShow &&( <Cart list={props.list} remove={props.remove} />)}
      {menuShow  && ( <div className='hiddenDiv'></div> )}
      
    </div>
  )
}

export default Navbar