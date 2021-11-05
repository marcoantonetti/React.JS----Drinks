import React from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button'

export default function Items(props) {

    const {img,title,price} = props

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                     {price}
                </Card.Text>
                <Button variant="success"><a href='detalle'></a>$ Comprar <i className="fas fa-shopping-cart"> </i> </Button>
            </Card.Body>
        </Card>
    )
}
