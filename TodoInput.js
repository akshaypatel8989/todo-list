import React, { useState } from 'react'

function TodoInput() {
    const [text,setText]=useState('')

  return (
    <div>
        <div>
            <input type='text' placeholder='enter todo'onChange={(e)=>{setText(e.target.value)}}/>
            < button>+</button>
            {text}
        </div>
      
    </div>
  )
}

export default TodoInput
