import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Item = ({ info }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={info.Img} />
            <Card.Body>
                <Card.Title>{info.Name}</Card.Title>
                <Card.Text>
                    {info.Tipo}
                </Card.Text>
                <Link to={`/detail/${info.id}`}>
                    <Button variant="primary">info</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item

