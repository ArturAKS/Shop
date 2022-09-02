import React from 'react'
import { useState } from 'react'
import {  NavLink} from "react-router-dom"

import { CgMenu } from "react-icons/cg"
import { BiFilter } from "react-icons/bi"
import { TiShoppingCart } from "react-icons/ti"

import Cart from './Cart'
import Menu from './Menu'


  function Navbar (props) {
    let [menuShow, setMenuShow] = useState(false)
    let [cartShow, setCartShow] = useState(false)

    const menuIconTypes = () => {
      if(menuShow) {return (<div> <BiFilter className='manuBar' onClick={(e) =>{e.stopPropagation(); setMenuShow( false)}}/>  <Menu /> </div>)}
        else{return (<CgMenu className='manuBar' onClick={(e) =>{e.stopPropagation(); setMenuShow(menuShow = true)}}/> )}
    }

    const cartShowFunc = e => { e.stopPropagation();setCartShow(cartShow = !cartShow)}


  return (
    <div >
      <div className='navBar'>
        <div className='menuList'>{ menuIconTypes()}</div>      
        <ul> 
        <li><TiShoppingCart className={`shoppingCart ${cartShow && 'active'}`} onClick= {cartShowFunc} /></li>
        <li><NavLink className='homeLink' to='/'>Home</NavLink></li>
        </ul>
      </div>
      {cartShow &&( <Cart list={props.list} remove={props.remove} />)}
    </div>
  )
}

export default Navbar