import React, { useState } from 'react';
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from './Navbar';
import Beds from '../Pages/Beds/Beds';
import Chaires from '../Pages/Chaires/Chaires';
import HomePage from '../Pages/home/HomePage';
import Sofas from '../Pages/Sofas/Sofas';
import Tables from '../Pages/Tables/Tables';
import Error from '../Pages/Error';

export default function AppRoutes() {
  let [itemsInCart,setItemsInCart] = useState([])
  


  function onAdd (el) {  
    if(itemsInCart.length === 0){
      setItemsInCart(itemsInCart = [el])
    }
    if (itemsInCart.findIndex(item => item.id === el.id) === -1){
  setItemsInCart(prev => [...prev, el])
  }}

  function remove (el) {
    setItemsInCart(itemsInCart = itemsInCart.filter( item => item.name !== el.name))
  }

  return (
    <div>
    <Router>
      <Navbar list={itemsInCart} remove={remove}/>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/chaires' element={<Chaires onAdd={onAdd} />}> </Route>
        <Route path='/beds' element={<Beds onAdd={onAdd} />}></Route>
        <Route path='/sofas' element={<Sofas onAdd={onAdd} />}></Route>
        <Route path='/tables' element={<Tables onAdd={onAdd} />}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}
