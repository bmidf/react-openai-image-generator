import React from 'react';
import {Col, Row,Container, Button} from 'react-bootstrap';
import CarouselEx from '../components/Carousel';
import {BsPatchCheck,BsPalette,BsLightbulb,BsPersonCheck, BsImages,BsClockHistory,BsShieldCheck} from "react-icons/bs";
import PeopleCounter from '../components/PeopleCounter'
import ImagesCounter from '../components/ImagesCounter'
import Man from '../assets/images/ed2.png'

const Home = () => {
    
    return (
        <Container style={{color: 'white'}}>
            <Row style={{width: '100%', alignItems: 'center',justifyContent: 'center', marginTop: '20px',fontFamily: 'boldRa'}}>
                <Col  xs={8}>
                <h1 style={{textAlign: 'center'}}>Welcome to the BM's AI image Generator</h1>
                </Col>
                <Col xs={4} style={{justifyContent: 'center'}}>
                    <Row xs={12}><Button variant="success" href="/generator"  >OPEN GENERATOR</Button></Row>
                </Col>
            </Row>
            <CarouselEx/>
            <Row style={{textAlign: 'left', marginTop: '50px',fontFamily: 'boldRa', height: '600px', margin: '20px' }}>
                <Col size='9' md='6'>
                    <Row>
                    <Row><h1 style={{color: 'wheat'}}>Why our AI generator?</h1></Row>
                    <p><br/><br/>Our AI image generator is a powerful and reliable tool that can help 
                    you create high-quality images quickly and easily. Whether you are a professional
                     designer or a casual user, our image generator has something to offer for everyone.
                     Generating images using traditional methods can be time-consuming and require specialized skills.
                     Our image generator allows you to generate images quickly and easily, saving you time and effort.</p>
                     </Row>     
                </Col>
                <Col size='9' md='6'>
                    <Row style={{alignItems: 'right', display: 'flex', justifyContent: 'right' }}> 
                        <img src={Man} alt="Ai logo" style={{width: '100%'}}></img>
                    </Row>
                </Col>
            </Row>
            {/* <Row style={{textAlign: 'center', marginTop: '30px',fontFamily: 'boldRa' }}>
                <Col xs={2}></Col>
                <Col  xs={8} style={{background: 'rgba(181, 17, 58, 0.5)'}}><h1 >Services</h1></Col>
                <Col xs={2}> </Col>
            </Row> */}
            <Row className='IMAGE' style={{textAlign: 'center',fontFamily: 'boldRa', justifyContent: 'space-around'}}>
                 <Col  size='6' md='4' style={{height: '350px',  }}>
                     <Row>
                        <h3 style={{marginTop: '20px'}} >Quality</h3>
                    </Row>
                    <Row >
                        <BsPatchCheck size={70} style={{marginTop: '30px'}}/>
                    </Row>
                    <Row  style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <p  style={{width: '60%' }}>Advanced AI technology to produce high-quality images that are rich in detail and clarity.</p>
                    </Row>
                </Col>
                <Col  size='6' md='4' style={{height: '350px',}}>
                    <Row>
                        <h3 style={{marginTop: '20px'}}>Design</h3>
                    </Row>
                    <Row >
                        <BsPalette size={70} style={{marginTop: '30px'}}/>
                    </Row>
                    <Row  style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <p  style={{width: '60%' }}> Offering a wide range of customization options, allowing you to adjust the size and resolution of your images to suit your specific needs.</p>
                    </Row>
                </Col>
                <Col  size='6' md='4' style={{height: '350px'}}>
                    <Row>
                        <h3 style={{marginTop: '20px'}}>Versatility</h3>
                    </Row>
                    <Row >
                        <BsLightbulb size={70} style={{marginTop: '30px'}}/>
                    </Row>
                    <Row  style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <p  style={{width: '60%' }}>Capable of generating a wide range of images from simple to complex, making it a versatile tool for all your image generation needs.</p>
                    </Row>
                </Col>
            </Row>
            <Row style={{textAlign: 'center',fontFamily: 'boldRa', justifyContent: 'space-around', marginTop: '50px'}}>
                 <Col  size='9' md='6' style={{height: '350px',  }}>
                     <Row>
                        <h3 style={{marginTop: '20px'}} >Support</h3>
                    </Row>
                    <Row >
                        <BsShieldCheck size={70} style={{marginTop: '30px'}}/>
                    </Row>
                    <Row  style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <p  style={{width: '60%' }}>We offer excellent customer support to ensure that you have a seamless and enjoyable experience using our image generator.</p>
                    </Row>
                </Col>
                <Col  size='9' md='6' style={{height: '350px',}}>
                    <Row>
                        <h3 style={{marginTop: '20px'}}>Speed</h3>
                    </Row>
                    <Row >
                        <BsClockHistory size={70} style={{marginTop: '30px'}}/>
                    </Row>
                    <Row  style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <p  style={{width: '60%' }}>Fast and efficient, allowing you to generate images quickly and easily.</p>
                    </Row>
                </Col>
            </Row>
            <Row style={{textAlign: 'center', marginTop: '20px',fontFamily: 'boldRa'}}>
                <Col size='9' md='6' style={{height: '350px'}}>
                    <Row style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                       <h3>Member Count<br/> <PeopleCounter/></h3> 
                    </Row>
                        <Row style={{display: 'flex',alignItems: 'center',justifyContent: 'center', height: '200px'}}>
                            <BsPersonCheck size={70}/>
                        </Row>
                </Col>
                <Col size='9' md='6' style={{height: '350px'}}>
                    <Row style={{display: 'flex',alignItems: 'center',justifyContent: 'center',marginTop: '40px'}}>
                        <h3>Images Generated<br/> <ImagesCounter/></h3> 
                    </Row>
                    <Row style={{display: 'flex',alignItems: 'center',justifyContent: 'center', height: '200px'}}>
                            <BsImages size={70}/>
                        </Row>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <Row xs={12}><Button variant="success" href="/generator"  >OPEN GENERATOR</Button></Row>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default Home