import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function RestCard({restuarant}) {
    return (
        <>
           <Link to={`/carddetails/${restuarant?.id}`} style={{textDecoration:'none'}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'250px'}} className='rounded p-2' variant="top" src={restuarant?.photograph} />
                    <Card.Body>
                        <Card.Title>{restuarant?.name}</Card.Title>
                        <Card.Text>
                            <p>Cuisine : {restuarant?.cuisine_type}</p>
                            <p>{restuarant?.neighborhood}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
           </Link>
        </>
    )
}

export default RestCard