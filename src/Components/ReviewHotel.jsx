import React, { useState } from 'react'
import {Collapse, Button} from 'react-bootstrap';

function ReviewHotel({restuarant}) {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                variant="dark"
            >
                Click Here to View Reviw
            </Button>
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <h3>Reviews:</h3>
                    <ul>
                        {restuarant?.reviews && restuarant.reviews.map((review, reviewIndex) => (
                            <li key={reviewIndex}>
                                <p><strong>Name:</strong> {review.name}</p>
                                <p><strong>Date:</strong> {review.date}</p>
                                <p><strong>Rating:</strong> {review.rating}</p>
                                <p><strong>Comments:</strong> {review.comments}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Collapse>

        </div>
    )
}

export default ReviewHotel