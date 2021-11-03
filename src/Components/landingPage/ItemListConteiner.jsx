import React from 'react'
import CountButton from '../Button/CountButton/CountButton'

export default function ItemListConteiner(props) {
    return (
        <div>
            <h1>{props.bienvenida}</h1>
            <CountButton initial={0} stock={10}/>             

        </div>
    )
}
