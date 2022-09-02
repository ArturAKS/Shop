import React from 'react'
import { NavLink} from "react-router-dom"

function Menu() {

const menu= [{title: 'Tables', path: '/tables'},
{title: 'Chaires', path: '/chaires'} ,
{title: 'Sofas', path: '/sofas'} ,
{title: 'Beds', path: '/beds'} ]

  return (
    <>
        {menu.map(el => (<NavLink className='links' key={el.title} to={el.path}>{el.title}</NavLink>))}
    </>
  )
}
export default  Menu
