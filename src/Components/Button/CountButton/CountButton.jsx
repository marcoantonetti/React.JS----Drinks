import React from 'react'
import { useState, useEffect } from 'react'
import './CountButton.css'

export default function CountButton({initial, stock, onAdd}) {

    let [count, setCount] = useState(initial)
    let bool = false

       function sumCount(){
        count < stock ?  setCount(count+1): bool=true
    }

    function restCount(){
        count > initial ? setCount(count-1) : bool=true
    }

    onAdd(count)
  

    return (
        <div>

        <button className='btm-sum' onClick={sumCount}  >+</button>
            <label className='btn-count-label'>  {count}  </label>
        <button className='btm-rest' onClick={restCount} disabled={bool}>-</button>

        </div>
    )
}
