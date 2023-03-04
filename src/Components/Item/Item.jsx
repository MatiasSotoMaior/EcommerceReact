import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ info }) => {
    return (
        <Card className='col-6' style={{ width: '18rem', margin:'1em' }}>
            <Card.Img variant="top" src={info.Img} />
            <Card.Body className='text-center'>
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

