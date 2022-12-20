import React from 'react';
import {Col, Row,Container, Button} from 'react-bootstrap';
import CarouselEx from './Carousel';
import {BsPatchCheck,BsPalette,BsLightbulb} from "react-icons/bs";
const Home = () => {
    return (
        <Container>
            
            <CarouselEx/>
            <Row style={{width: '100%', alignItems: 'center',justifyContent: 'center', marginTop: '50px'}}>
                <Col  xs={8}>
                <h1 style={{textAlign: 'center'}}>Welcome to the BM's AI image Generator</h1>
                </Col>
                <Col xs={4}>
                <Button variant="primary" href="/generator" style={{display: 'flex',justifyContent: 'center'}} >Generator</Button>
                </Col>
            </Row>
            <Row style={{textAlign: 'center', marginTop: '50px',}}>
                 <Col  size='6' md='4' style={{height: '350px'}}>
                     <Row>
                        <h3 style={{marginTop: '20px'}} >Quality</h3>
                    </Row>
                    <Row >
                        <BsPatchCheck size={70} style={{marginTop: '30px'}}/>
                    </Row>
                    <Row  style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <p  style={{width: '60%' }}>All the images are made in 1920x1280 resolution. Which makes image more realistic.</p>
                    </Row>
                </Col>
                <Col  size='6' md='4' style={{height: '350px'}}>
                    <Row>
                        <h3 style={{marginTop: '20px'}}>Design</h3>
                    </Row>
                    <Row >
                        <BsPalette size={70} style={{marginTop: '30px'}}/>
                    </Row>
                    <Row  style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <p  style={{width: '60%' }}>All the images are made in 1920x1280 resolution. Which makes image more realistic.</p>
                    </Row>
                </Col>
                <Col  size='6' md='4' style={{height: '350px'}}>
                    <Row>
                        <h3 style={{marginTop: '20px'}}>Unique</h3>
                    </Row>
                    <Row >
                        <BsLightbulb size={70} style={{marginTop: '30px'}}/>
                    </Row>
                    <Row  style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <p  style={{width: '60%' }}>All the images are made in 1920x1280 resolution. Which makes image more realistic.</p>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Home