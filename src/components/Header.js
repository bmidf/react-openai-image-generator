
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import {BsPersonCircle} from 'react-icons/bs'
import { Container, Col } from 'react-bootstrap';
import Logo from '../assets/images/Untitled.png'
function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);



  return  (
    <>
    <Navbar style={{borderRadius: '15px'}}>
      <Container style={{fontFamily: 'boldRa',color: 'white'}}>
        <Col style={{justifyContent: 'center'}}>
        <Nav style={{fontSize: '20px'}}>
          <Navbar.Brand href="/" ><img style={{width: '60px', height: '60px'}} src={Logo} alt='Logo'></img></Navbar.Brand>
        </Nav>
        </Col>
        <Col>
        <Nav style={{justifyContent: 'center', fontSize: '20px' ,color: 'white' }}>
          <Nav.Link href="/"><p style={{color: 'white' }}>Home</p></Nav.Link>
          <Nav.Link href="/gallery"><p style={{color: 'white' }}>Gallery</p></Nav.Link>
          <Nav.Link href="/about-us"><p style={{color: 'white' }}>About Us</p></Nav.Link>
        </Nav>
        </Col>
        <Col style={{justifyContent: 'right'}}>
        {user ? (
          <Nav className='remove' style={{ justifyContent: 'right',fontSize: '20px' ,color: 'white' }}>
        <Navbar.Brand href="/profile" style={{color: 'white'}}><BsPersonCircle size={30} /></Navbar.Brand>
        </Nav>
      ) : (
        <>
          <Nav className='remove' style={{ justifyContent: 'right',fontSize: '20px' ,color: 'white' }}>
            <Navbar.Brand href="/login" ><Button variant="outline-primary" style={{color: 'white',borderColor: 'white' }}> Sign In</Button></Navbar.Brand>
            <Navbar.Brand href="/register" ><Button variant="outline-primary" style={{color: 'white' ,borderColor: 'white' }}>Sign Up</Button></Navbar.Brand>
          </Nav>
        </>

      )}
        </Col>
      </Container>
      </Navbar>
    </>
  );
}

export default Header;