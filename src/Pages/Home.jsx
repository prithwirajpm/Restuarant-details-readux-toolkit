import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import RestCard from '../Components/RestCard'
import { fetchRestuarants } from '../Redux/restuatantSlice'


function Home() {
    const {allRestuarant,loading} = useSelector((state) => state.restuarantSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRestuarants())
    }, [])
    return (
        <>
        <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
            {
                loading && <div className='mt-5'><span className='text-danger'>Loading.......</span></div>
            }
        </div>
            <Row className='mt-5'>
                {
                    allRestuarant?.length > 0 ? allRestuarant.map(restuarant => (
                        <Col className='px-5 py-5' sm={12} md={6} lg={4} xl={3}>
                            <RestCard restuarant={restuarant} />
                        </Col> 
                    )) : <p>Nothing To display</p>
               }




            </Row>
        </>
    )
}

export default Home