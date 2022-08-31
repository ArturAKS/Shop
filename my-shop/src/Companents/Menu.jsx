import React from 'react'
import {
 NavLink
} from "react-router-dom"

function Menu() {

const menu= [{title: 'Tables', path: '/tables'},{title: 'Chaires', path: '/chaires'} ,{title: 'Sofas', path: '/sofas'} ,{title: 'Beds', path: '/beds'} ]
  return (
    <ul className='menuList'>
        {menu.map(el => (<li key={el.title}><NavLink className='links' to={el.path}>{el.title}</NavLink></li>))}
    </ul>
  )
}
export default  Menu
