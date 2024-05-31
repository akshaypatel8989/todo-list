import React from 'react';
import "./Todo.css"

function Todolist(props) {
  return (

      <li className='list-item'>{props.itam}
      <span className='icons'><i className="fa-solid fa-trash-can icon-delete" onClick={(e)=>{props.deletlistitam(props.index)}}></i></span></li>

  )
}

export default Todolist
