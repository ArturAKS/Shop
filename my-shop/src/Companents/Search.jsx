import React from 'react'
import { useState } from 'react'

import Items from './Itemes'

export default function Search(props) {
    let [search, setSearch] = useState("")
    const [sorted,setSorted] = useState(props.arr)

    const change = (e) => {
      setSearch(search = e.target.value);
      if (search.trim() === ''){
        setSorted(props.arr)
      }else{
      setSorted(() => props.arr.filter((el)=> el.title.toLowerCase().includes(search.toLowerCase())))}
    }

  return (
    <div className='sort'>        
      <input className='sortInput' type='text' placeholder='Sheach' value={search} onChange={ e => change(e)}></input>        
      <div className='main'>          
        {sorted.map(el => (
        <Items item={el} key={el.id} add={props.add}/>))}    
      </div> 
    </div>
  )
}
