import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import RestCard from '../Components/RestCard'
import { fetchRestuarants } from '../Redux/restuatantSlice'


function Home() {
    const allresuarant = useSelector((state) => state.restuarantSlice.allRestuarant)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRestuarants())
    }, [])
    return (
        <>
            <Row className='mt-5'>
                {
                    allresuarant?.length > 0 ? allresuarant.map(restuarant => (
                        <Col className='px-5 py-5' sm={12} md={6} lg={4} xl={3}>
                            <RestCard restuarant={restuarant} />
                        </Col> 
                    )) : null
               }




            </Row>
        </>
    )
}

export default Home