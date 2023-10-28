import React from 'react'
import { Container,Navbar } from 'react-bootstrap'

function Header() {
  return (
    <>
   
    <Navbar style={{backgroundColor:'white',zIndex:'1'}} className='position-fixed top-0 w-100'>
        <Container> 
          <Navbar.Brand>
          <h1 style={{fontSize:'20px'}} className='fw-bolder text-light'><i class="fa-solid fa-utensils"></i>Resturent</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header