import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ info }) => {
    return (
        <Card className='col-6' style={{ width: '18rem', margin: '1em' }}>
            <Card.Img variant="top" src={info.Img} />
            <Card.Body className='text-center'>
                <div>
                    <Card.Title>{info.Name}</Card.Title>
                    <Card.Text>{info.Tipo}</Card.Text>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                    <p className='me-3 fs-4'>${info.Precio}</p>
                    <Link to={`/detail/${info.id}`}>
                        <Button variant="primary">info</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Item

