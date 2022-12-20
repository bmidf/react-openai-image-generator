import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
function Header() {
    return (
        <>
          <Navbar style={{borderRadius: '15px' }}>
            <Container >
              <Nav style={{marginTop: '16px', fontSize: '20px'}}>
                <Navbar.Brand href="/" ><p>Logo</p></Navbar.Brand>
              </Nav>
              <Nav style={{marginLeft: '80px', marginTop: '16px', fontSize: '20px'}}>
                <Nav.Link href="/"><p>Home</p></Nav.Link>
                <Nav.Link href="/gallery"><p>Gallery</p></Nav.Link>
                <Nav.Link href="/about-us"><p>About Us</p></Nav.Link>
              </Nav>
              <Nav className='remove'>
                <Navbar.Brand href="/login" ><Button variant="outline-primary" >Sign In</Button></Navbar.Brand>
                <Navbar.Brand href="/register"><Button variant="outline-primary">Sign Up</Button></Navbar.Brand>
              </Nav>
            </Container>
          </Navbar>
        </>
    );
}

export default Header;