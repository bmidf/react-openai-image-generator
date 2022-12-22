import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg py-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col xs={12} sm={6} md={4} style={{color: 'white'}}>
            <div className="text-center text-sm-left">
                <a href="https://www.facebook.com/" style={{color: 'white', marginRight: '30px'}}>
                    <BsFacebook />
                </a>
                <a href="https://www.twitter.com/" style={{color: 'white', marginRight: '30px'}}>
                    <BsTwitter />
                </a>
                <a href="https://www.instagram.com/" style={{color: 'white', marginRight: '30px'}}>
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/" style={{color: 'white', marginRight: '30px'}}>
                    <BsLinkedin />
                </a>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="text-center text-sm-right">
            <p className="text-white mb-0">Copyright 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
