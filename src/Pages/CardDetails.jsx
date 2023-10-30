import React, { useEffect, useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import OperatingHours from '../Components/OperatingHours'
import ReviewHotel from '../Components/ReviewHotel'

function CardDetails() {
  const { id } = useParams()
  const { allRestuarant, loading } = useSelector((state) => state.restuarantSlice)
  const [restuarant, setRestuarant] = useState({})
  useEffect(() => {
    setRestuarant(allRestuarant?.find(item => item.id == id))
  }, [])
  console.log(restuarant);

  return (
    <div className='mt-5'>
      <div>
        <Row className='mt-5'>
          <Col md={12} lg={6}>
            <img src={restuarant?.photograph} style={{ width: '100%' }} />
          </Col>
          <Col md={12} lg={6}>
            <div className='bg-dark mt-5 mb-5 p-3' style={{ width: '100%' }}>
              <h1>{restuarant?.name}</h1>
              <h6>{restuarant?.neighborhood}</h6>
              <h6>Cuisine : {restuarant?.cuisine_type}</h6>
              <h6>Address : {restuarant?.address}</h6>
            </div>
            <OperatingHours restuarant={restuarant} />
            <div className='mt-5'>
              <ReviewHotel  restuarant={restuarant} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CardDetails