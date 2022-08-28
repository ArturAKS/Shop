import React, { useState } from 'react'
import Navbar from './Companents/Navbar';
import Beds from './Pages/Beds/Beds';
import Chaires from './Pages/Chaires/chaires';
import HomePage from './Pages/home/HomePage';
import Sofas from './Pages/Sofas/Sofas';
import Tables from './Pages/Tables/Tables';
import { BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Error from './Pages/Error';
import ModalItem from './Companents/ModalItem';

function App() {
  let [itemsInCart,setItemsInCart] = useState([])
  let [modal,setModal] = useState(false)
  let [item, setItem] = useState({})


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
 function changeModal(el) {
   setModal(modal = true)
   setItem(item = el)
 }

 function change () {
  setModal(modal = false)
 }

  return (
    <Router>
      {modal && (<ModalItem item = {item} change={change} add={onAdd}/>)}
    <div className="App">
      <Navbar list={itemsInCart} remove={remove}/>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route path='/chaires' element={<Chaires onAdd={onAdd} changeModal={changeModal}/>}> </Route>
        <Route path='/beds' element={<Beds onAdd={onAdd} changeModal={changeModal}/>}></Route>
        <Route path='/sofas' element={<Sofas onAdd={onAdd} changeModal={changeModal}/>}></Route>
        <Route path='/tables' element={<Tables onAdd={onAdd} changeModal={changeModal}/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      
      </div>
      </Router>
  );
}

export default App;
