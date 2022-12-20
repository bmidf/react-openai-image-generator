import React from 'react';
import {Col, Row,Container, Button} from 'react-bootstrap';
import CarouselEx from './Carousel';
const Home = () => {
    return (
        <Container>
            
            <CarouselEx/>
            <Row style={{width: '100%', alignItems: 'center',justifyContent: 'center'}}>
                <h1 style={{textAlign: 'center'}}>Welcome to the BM's AI image Generator</h1>
                <Button variant="primary" href="/generator" style={{width: '30%'}}>Generator</Button>
            </Row>
            <Row style={{textAlign: 'center', marginTop: '13px'}}>
                <Col>
                    <h1>+</h1>
                </Col>
                <Col>
                    <h1>+</h1>
                </Col>
                <Col>
                    <h1>+</h1>
                    <h1>+</h1>
                </Col>
            </Row>
        </Container>
    )
}
export default Home