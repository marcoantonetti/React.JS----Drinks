import React from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button from 'react-bootstrap/Button'
import {useParams, Link} from 'react-router-dom'

export default function Items(props) {

    const {img,title,price,ID} = props

    return (   

        <Card style={{ width: '18rem'  }}>
            <Card.Img variant="top" src={img}  />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                     ${price}
                </Card.Text>
                <Link to={`/detail/${ID}`}>
                <Button variant="success" >$ Comprar </Button>
                </Link>
            </Card.Body>
        </Card>
         )  
        
}
