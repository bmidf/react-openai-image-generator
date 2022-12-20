import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
function Header() {
    return (
        <>
          <Navbar bg="black" style={{borderRadius: '15px' }}>
            <Container style={{color: 'white'}}>
              <Nav style={{marginTop: '16px', fontSize: '20px'}}>
                <Navbar.Brand href="/" ><p style={{color: 'white'}}>Logo</p></Navbar.Brand>
              </Nav>
              <Nav style={{marginLeft: '80px', marginTop: '16px', fontSize: '20px'}}>
                <Nav.Link href="/"><p style={{color:'white'}}>Home</p></Nav.Link>
                <Nav.Link href="/gallery"><p style={{color:'white'}}>Gallery</p></Nav.Link>
                <Nav.Link href="/about-us"><p style={{color:'white'}}>About Us</p></Nav.Link>
              </Nav>
              <Nav >
                <Navbar.Brand href="/login"><Button>Login</Button></Navbar.Brand>
                <Navbar.Brand href="/register"><Button>Sign in</Button></Navbar.Brand>
              </Nav>
            </Container>
          </Navbar>
        </>
    );
}

export default Header;