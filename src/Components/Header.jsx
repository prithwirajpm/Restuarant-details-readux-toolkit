import React from 'react'
import { Container,Navbar } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchRestuarant } from '../Redux/restuatantSlice'

function Header() {
  const dispatch = useDispatch()
  return (
    <>
   
    <Navbar style={{backgroundColor:'white',zIndex:'1'}} className='position-fixed top-0 w-100'>
        <Container> 
          <Navbar.Brand>
          <h1 style={{fontSize:'20px'}} className='fw-bolder text-light'><i class="fa-solid fa-utensils"></i>Resturent</h1>
          
          </Navbar.Brand>
          <div className='d-flex ms-auto align-items-center'>
            <input type="text" className='form-control' onChange={(e)=>dispatch(searchRestuarant(e.target.value))} placeholder='search Restorent'/>
            <i style={{marginLeft:'20px'}} className='fa-solid fa-magnifying-glass'></i>
          </div>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header