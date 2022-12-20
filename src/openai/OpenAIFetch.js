import React, { useState } from "react";
import { Container, Row,Form,Button } from "react-bootstrap";

const API_KEY = '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';
/*eslint-disable-next-line*/
const OpenAIFetch = () => {
  const [generatedImage, setGeneratedImage] = useState(null);
  const [userInput, setUserInput] = useState("");

  const generateImage = async () => {
    
    const response = await fetch(`https://api.openai.com/v1/images/generations`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "image-alpha-001",
          prompt: userInput
        })
      }
    );
    const data = await response.json();
    setGeneratedImage(data.data[0].url);
  };

  return (
    <Container style={{height: '100vh'}}>
      <Row >
        <Row >
          <Row style={{justifyContent: 'center', width: '100%'}}>
          <Form.Control
          style={{justifyContent: 'center', width: '50%', margin: '20px'}}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            type="text"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
          </Row>
          <Row style={{justifyContent: 'center', width: '100%'}}>
            <button style={{justifyContent: 'center', width: '50%', margin: '0px 20px 20px 20px'}} 
            onClick={generateImage}>Generate Image</button>
          </Row>
        </Row>
        <Row style={{justifyContent: 'center'}}>
        {generatedImage && <><img src={generatedImage} style={{width: '40%'}} alt="Generated"/></> }
        </Row>
        <Row style={{justifyContent: 'center', width: '100%'}}>
          {generatedImage && (
              <>
                <Button href={generatedImage} download className="download-button">Download</Button>
              </>
          )}
        </Row>
      </Row>
    </Container>
  );
};

export default OpenAIFetch;