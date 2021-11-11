import React from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function ItemDetail(props) {

    const {img,title,price,categoria,subcategoria} = props

    return (
        
        <Card style={{ width: '18rem'  }}>
            <Card.Img variant="top" src={img}  />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                     ${price}
                </Card.Text>
                <Link to={`/cart/`}><Button variant="warning" > <i className="fas fa-shopping-cart"></i> Agregar al Carrito  </Button>
                </Link>
            </Card.Body>
        </Card>      
    )
}
