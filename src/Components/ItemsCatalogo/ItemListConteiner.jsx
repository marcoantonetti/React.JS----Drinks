import React from 'react'
import CountButton from '../Button/CountButton/CountButton'
import Items from './items'
import { useState, useEffect } from 'react'
import getFetch from './itemList'
import  Card  from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button'
import { productos } from './itemList'


export default function ItemListConteiner(props) {

    const [products, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch//then((resolve)=>{resolve.json()}) No pongo el json porque no es una API es solo una simulacion. Array productos ya es un obj JS no un obj JSON
        .then((resolve)=>{
            setProductos(resolve)})
        .catch((err)=>{console.log('ERROR: ' + err)})
        .finally(() => {setLoading(false)}) 
        /* Finally simula que cuando carga la pagina, por el set time out,
        aparece loading en pantalla. Cuando se ejecuta el finally es porque ya
        se consumio la Api y essta lista para usarse. Por tanto loading pasa a false
        y el cartel desaparece*/
        
    }, [])
    


    return (
        <div>
            <h1>{props.bienvenida}</h1>
            <CountButton initial={0} stock={10}/> 

            {loading ? <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div> : 
                         products.map((prod) => <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.img} />
            <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>
                     {prod.price}
                </Card.Text>
                <Button variant="success"><a href='detalle'></a>$ Comprar <i className="fas fa-shopping-cart"> </i> </Button>
            </Card.Body>
        </Card> )  }                                

        </div>
    )
}
