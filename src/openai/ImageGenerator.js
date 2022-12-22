
import React, { useState, useEffect } from 'react';
import { Container,Row ,Col, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function ImageGenerator() {
    const [imageUrl, setImageUrl] = useState('');
    const [prompt, setPrompt] = useState('');
    const [size, setSize] = useState('256x256');

    const sizes = ['256x256', '512x512', '1024x1024'];
    const [user, setUser] = useState(null);

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      setUser(storedUser);
    }, []);
  
    const generateImage = async () => {
    try {
        const response = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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',
            },
            body: JSON.stringify({
            model: 'image-alpha-001',
            prompt,
            size,
            response_format: 'url',
            }),
        }
        );
        const data = await response.json();
        setImageUrl(data.data[0].url);
    } catch (error) {
        console.error(error);
    }
    };

    const addToGallery = () => {
      const images = JSON.parse(localStorage.getItem('images')) || [];
      images.push(imageUrl);
      localStorage.setItem('images', JSON.stringify(images));
      
      const updatedUser = {
        ...user,
        gallery: [...user.gallery, imageUrl]
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    };
  return (
    <Container style={{fontFamily: 'boldRa', color: 'white', height:'800px'}}>
      <Row>
        <Col style={{textAlign: 'center',justifyContent: 'center', marginTop: '30px'}}>
        <Row style={{textAlign: 'center',justifyContent: 'center'}} >
          <Col size='6' md='4'><h4 htmlFor="prompt">Enter Your Prompt:</h4></Col>
          <Col size='6' md='4'><Form.Control style={{backgroundColor: 'inherit', borderColor: 'blue'}} type="text" id="prompt" value={prompt} onChange={(event) => setPrompt(event.target.value)}/></Col>
          <Col size='6' md='4' style={{textAlign: 'left', justifyContent: 'left' }}><Button variant="outline-primary" onClick={generateImage}>Generate</Button></Col>
        </Row>
        <label htmlFor="size">Size:</label>
          <select style={{backgroundColor: 'inherit', borderColor: 'blue', color: 'white'}} id="size" value={size} onChange={(event) => setSize(event.target.value)}>
            {sizes.map((sizeOption) => (
              <option key={sizeOption} value={sizeOption}>
                {sizeOption}
              </option>
            ))}
          </select>
          </Col>
      </Row>
      <Row  >
        <Col style={{marginTop: '60px',textAlign: 'center',justifyContent: 'center'}}>
      {imageUrl ? (
        <img className='imageSize'  src={imageUrl} alt="Generated" />
      ) : (
        <p>No image generated</p>
      )}
      </Col>
      </Row>
      <Row  style={{marginTop: '60px',textAlign: 'center',justifyContent: 'center'}}>
        <Col size='6' md='4'></Col>
      <Col size='6' md='4' style={{ justifyContent: 'left' }}>{imageUrl ? <Button variant="outline-primary" onClick={addToGallery}>Add to Gallery</Button> : null}</Col>
      <Col size='6' md='4'></Col>
      </Row>
    </Container>
  );
}

export default ImageGenerator;