import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('images')) || [];
    setImages(
      storedImages.map((imageUrl) => (
        <div style={{ position: 'relative' }} key={imageUrl}>
          <img src={imageUrl} alt="Generated" style={{ width: '400px', height: '400px' }} />
          <button
            style={{ position: 'absolute', top: '5px', right: '5px' }}
            onClick={() => {
              const newImages = storedImages.filter((imgUrl) => imgUrl !== imageUrl);
              setImages(newImages);
              localStorage.setItem('images', JSON.stringify(newImages));
            }}
          >
            Delete
          </button>
        </div>
      ))
    );
  }, []);

  return (
    <Container style={{justifyContent: 'center', textAlign: 'center', fontFamily: 'boldRa',height:'2000px', color: 'white'}}>
    <div className="d-flex flex-wrap" style={{ gap: '30px', alignItems: 'end', justifyContent: 'center', height: 'absolute' }}>
      {images}
    </div>
    </Container>
  );
}

export default Gallery;
