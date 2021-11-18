import React from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import CountButton from '../../Button/CountButton/CountButton'
import { useState } from 'react'





export default function ItemDetail(props) {

    const {img,title,price,stock} = props
    const [value, setValue] = useState(1)
    const [bool, setBool] = useState(true)

    function countButtonValue(value){
        setValue(value)
    }

  
    return (
        <Card style={{ width: '18rem'  }}>
            <Card.Img variant="top" src={img}  />
            <Card.Body>
                <Card.Title>{title}</Card.Title> 
                stock: {stock - value} 
                <Card.Text>
                     ${parseInt(price) * value}
                </Card.Text>
                {bool ? <><CountButton initial={1} stock={stock-1} onAdd={countButtonValue}/>
                          <Button  onClick={()=>setBool(false)} variant="warning" > <i className="fas fa-shopping-cart"></i> Agregar al Carrito  </Button></>
                :<>
                <Link to={`/cart/`}><Button variant='warning'> Finalizar Compra </Button></Link>  

                <Link to={`/`}><Button variant='dark warning'> Seguir Comprando </Button></Link>  </>
                }
            </Card.Body>
        </Card>      
    )
}
